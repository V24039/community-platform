import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { faker } from '@faker-js/faker'
import { act, render, within } from '@testing-library/react'
import { Provider } from 'mobx-react'
import { UserRole } from 'oa-shared'
import { useDiscussionStore } from 'src/stores/Discussions/discussions.store'
import { useQuestionStore } from 'src/stores/Question/question.store'
import { FactoryDiscussion } from 'src/test/factories/Discussion'
import { FactoryQuestionItem } from 'src/test/factories/Question'
import { FactoryUser } from 'src/test/factories/User'
import { testingThemeStyles } from 'src/test/utils/themeUtils'

import { QuestionPage } from './QuestionPage'

const Theme = testingThemeStyles

const activeUser = FactoryUser({
  userRoles: [UserRole.BETA_TESTER],
})

const mockUser = FactoryUser()

jest.mock('src/common/hooks/useCommonStores', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  useCommonStores: () => ({
    stores: {
      userStore: {
        getUserByUsername: jest.fn().mockResolvedValue(mockUser),
      },
      aggregationsStore: {
        isVerified: jest.fn(),
        users_verified: {},
      },
      tagsStore: {},
    },
  }),
}))

jest.mock('src/stores/Question/question.store')
jest.mock('src/stores/Discussions/discussions.store')

describe('Questions', () => {
  const mockQuestionItem = FactoryQuestionItem({
    slug: 'testSlug',
  })

  let mockQuestionStore

  beforeEach(() => {
    // Setup a fresh instance of the mock store before each test
    mockQuestionStore = {
      activeQuestionItem: mockQuestionItem,
      incrementViewCount: jest.fn(),
      fetchQuestionBySlug: jest.fn(() => {
        return mockQuestionItem
      }),
      upsertQuestion: jest.fn(),
      toggleSubscriberStatusByUserName: jest.fn(),
      toggleUsefulByUser: jest.fn(),
    }
    ;(useQuestionStore as jest.Mock).mockReturnValue(mockQuestionStore)
    ;(useDiscussionStore as jest.Mock).mockReturnValue({
      fetchOrCreateDiscussionBySource: jest.fn().mockResolvedValue(
        FactoryDiscussion({
          sourceId: mockQuestionItem._id,
          sourceType: 'question',
        }),
      ),
      activeUser: mockUser,
    })
  })

  afterEach(() => {
    // Clear all mocks after each test to ensure there's no leakage between tests
    jest.clearAllMocks()
  })

  describe('Breadcrumbs', () => {
    it('displays breadcrumbs with category', async () => {
      // Arrange
      mockQuestionItem.title =
        'Do you prefer camping near a lake or in a forest?'
      mockQuestionItem.questionCategory = {
        label: 'Preference',
        _id: faker.string.uuid(),
        _modified: faker.date.past().toString(),
        _created: faker.date.past().toString(),
        _deleted: faker.datatype.boolean(),
        _contentModifiedTimestamp: faker.date.past().toString(),
      }
      ;(useQuestionStore as jest.Mock).mockReturnValue({
        ...mockQuestionStore,
        activeQuestionItem: mockQuestionItem,
        fetchQuestionBySlug: jest.fn(() => {
          return mockQuestionItem
        }),
      })

      // Act
      let wrapper
      await act(async () => {
        wrapper = getWrapper()
      })

      // Assert: Check the breadcrumb items and chevrons
      const breadcrumbItems = wrapper.getAllByTestId('breadcrumbsItem')
      expect(breadcrumbItems).toHaveLength(3)
      expect(breadcrumbItems[0]).toHaveTextContent('Question')
      expect(breadcrumbItems[1]).toHaveTextContent('Preference')
      expect(breadcrumbItems[2]).toHaveTextContent(
        'Do you prefer camping near a lake or in a forest?',
      )

      // Assert: Check that the first two breadcrumb items contain links
      const firstLink = within(breadcrumbItems[0]).getByRole('link')
      const secondLink = within(breadcrumbItems[1]).getByRole('link')
      expect(firstLink).toBeInTheDocument()
      expect(secondLink).toBeInTheDocument()

      // Assert: Check for the correct number of chevrons
      const chevrons = wrapper.getAllByTestId('breadcrumbsChevron')
      expect(chevrons).toHaveLength(2)
    })

    it('displays breadcrumbs without category', async () => {
      // Arrange
      mockQuestionItem.title =
        'Do you prefer camping near a lake or in a forest?'
      mockQuestionItem.questionCategory = undefined
      ;(useQuestionStore as jest.Mock).mockReturnValue({
        ...mockQuestionStore,
        activeQuestionItem: mockQuestionItem,
        fetchQuestionBySlug: jest.fn(() => {
          return mockQuestionItem
        }),
      })

      // Act
      let wrapper
      await act(async () => {
        wrapper = getWrapper()
      })

      // Assert: Check the breadcrumb items and chevrons
      const breadcrumbItems = wrapper.getAllByTestId('breadcrumbsItem')
      expect(breadcrumbItems).toHaveLength(2)
      expect(breadcrumbItems[0]).toHaveTextContent('Question')
      expect(breadcrumbItems[1]).toHaveTextContent(
        'Do you prefer camping near a lake or in a forest?',
      )

      // Assert: Check that the first breadcrumb item contains a link
      const firstLink = within(breadcrumbItems[0]).getByRole('link')
      expect(firstLink).toBeInTheDocument()

      // Assert: Check for the correct number of chevrons
      const chevrons = wrapper.getAllByTestId('breadcrumbsChevron')
      expect(chevrons).toHaveLength(1)
    })
  })
})

const getWrapper = () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/questions/:slug" key={1} element={<QuestionPage />} />,
    ),
    {
      initialEntries: ['/questions/question'],
    },
  )

  return render(
    <Provider
      userStore={{
        user: activeUser,
      }}
    >
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>,
  )
}
