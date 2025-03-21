const admin = require('firebase-admin')

const test = require('firebase-functions-test')()

import { v4 as uuid } from 'uuid'

import { DB_ENDPOINTS } from '../models'
import { handleUserUpdates } from './index'

describe('userUpdates', () => {
  let db
  beforeAll(async () => {
    db = await admin.firestore()
  })
  afterAll(test.cleanup)

  function stubbedUserSnapshot(userId, props) {
    return test.firestore.makeDocumentSnapshot(
      {
        _id: userId,
        ...props,
      },
      DB_ENDPOINTS.users,
    )
  }

  describe('updateDocuments', () => {
    it('updates library project when user country has changed', async () => {
      // Arrange
      const userId = uuid()
      const newCountryCode = 'nl'
      const wrapped = test.wrap(handleUserUpdates)

      await db.collection(DB_ENDPOINTS.library).add({
        _createdBy: userId,
        creatorCountry: 'uk',
      })

      // Act
      await wrapped(
        await test.makeChange(
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: 'uk',
            },
            country: 'uk',
          }),
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: newCountryCode,
            },
            country: newCountryCode,
          }),
        ),
      )

      // Assert
      const doc = (
        await db
          .collection(DB_ENDPOINTS.library)
          .where('_createdBy', '==', userId)
          .get()
      ).docs[0].data()

      expect(doc.creatorCountry).toBe(newCountryCode)
    })

    it.skip('updates library comments when user country has changed', async () => {
      // Arrange
      const userId = uuid()
      const newCountryCode = 'nl'
      const wrapped = test.wrap(handleUserUpdates)

      await db.collection(DB_ENDPOINTS.library).add({
        _createdBy: userId,
        creatorCountry: 'uk',
        comments: [
          {
            _creatorId: userId,
          },
        ],
      })

      // Act
      await wrapped(
        await test.makeChange(
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: 'uk',
            },
            country: 'uk',
          }),
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: newCountryCode,
            },
            country: newCountryCode,
          }),
        ),
      )

      // Assert
      const doc = (
        await db
          .collection(DB_ENDPOINTS.library)
          .where('comments', 'array-contains', {
            _creatorId: userId,
            creatorCountry: newCountryCode,
          })
          .get()
      )?.docs[0]?.data()

      expect(doc?.comments[0].creatorCountry).toBe(newCountryCode)
    })

    it.skip('updates the comments on library when a user country has changed', async () => {
      // Arrange
      const userId = uuid()
      const newCountryCode = 'nl'
      const wrapped = test.wrap(handleUserUpdates)

      await db.collection(DB_ENDPOINTS.library).add({
        _createdBy: uuid(),
        creatorCountry: 'uk',
        comments: [
          {
            _creatorId: userId,
          },
        ],
      })

      await db.collection(DB_ENDPOINTS.library).add({
        _createdBy: userId,
        creatorCountry: 'uk',
        comments: [
          {
            _creatorId: userId,
          },
        ],
      })

      // Act
      await wrapped(
        await test.makeChange(
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: 'uk',
            },
            country: 'uk',
          }),
          stubbedUserSnapshot(userId, {
            location: {
              countryCode: newCountryCode,
            },
            country: newCountryCode,
          }),
        ),
      )

      // Assert
      const libraryDocuments = await db
        .collection(DB_ENDPOINTS.library)
        .where('comments', 'array-contains', {
          _creatorId: userId,
          creatorCountry: newCountryCode,
        })
        .get()(
          await db
            .collection(DB_ENDPOINTS.library)
            .where('comments', 'array-contains', {
              _creatorId: userId,
              creatorCountry: newCountryCode,
            })
            .get(),
        )
        ?.docs[0]?.data()

      expect(libraryDocuments.docs).toHaveLength(2)
    })
  })

  describe('backupUser', () => {
    it.todo('adds revision to modified user')
  })
})
