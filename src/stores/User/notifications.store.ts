import { action, computed, makeObservable, toJS } from 'mobx'
import { logger } from 'src/logger'
import { randomID } from 'src/utils/helpers'

import { ModuleStore } from '../common/module.store'
// eslint-disable-next-line import/namespace
import { COLLECTION_NAME as USER_COLLECTION_NAME } from './user.store'

import type {
  INotification,
  INotificationUpdate,
  IUser,
  IUserDB,
  NotificationType,
} from 'oa-shared'
import type { IRootStore } from '../RootStore'

export class UserNotificationsStore extends ModuleStore {
  constructor(rootStore: IRootStore) {
    super(rootStore)
    makeObservable(this, {
      user: computed,
      triggerNotification: action,
      deleteNotification: action,
      markAllNotificationsRead: action,
      markAllNotificationsNotified: action,
    })
  }

  get user() {
    return this.userStore.user
  }

  // Returns all users created and notified but not read notifications
  //
  // Notification states are `created -> notified -> read`
  public getUnreadNotifications() {
    return (
      this.user?.notifications
        ?.filter((notification) => !notification.read)
        .sort(
          (a, b) =>
            new Date(b._created).getTime() - new Date(a._created).getTime(),
        ) || []
    )
  }

  // Returns all users created but not notified and not read notifications
  //
  // Notification states are `created -> notified -> read`
  public getUnnotifiedNotifications() {
    return (
      this.user?.notifications
        ?.filter((notification) => !notification.notified && !notification.read)
        .sort(
          (a, b) =>
            new Date(b._created).getTime() - new Date(a._created).getTime(),
        ) || []
    )
  }

  public async triggerNotification(
    type: NotificationType,
    userId: string,
    relevantUrl: string,
    title: string,
  ) {
    try {
      const triggeredBy = this.user
      if (triggeredBy) {
        // do not get notified when you're the one making a new comment or project useful vote
        if (triggeredBy._id === userId) {
          return
        }
        const newNotification: INotification = {
          _id: randomID(),
          _created: new Date().toISOString(),
          triggeredBy: {
            displayName: triggeredBy.displayName,
            userId: triggeredBy._id,
          },
          relevantUrl,
          type,
          title,
          read: false,
          notified: false,
        }

        const lookup = await this.db
          .collection<IUser>(USER_COLLECTION_NAME)
          .getWhere('_id', '==', userId)

        const user = lookup[0]
        if (!user) {
          return logger.error('User not found.', { newNotification })
        }
        const notifications = user.notifications
          ? [...toJS(user.notifications), newNotification]
          : [newNotification]

        await this._updateUserNotifications(user, notifications)
      }
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  public async markAllNotificationsNotified() {
    try {
      const user = this.user
      if (user) {
        const notifications = toJS(user.notifications)

        // update only if it has unnotified notifications
        if (notifications?.some((notification) => !notification.notified)) {
          for (const notification of notifications) {
            notification.notified = true
          }

          await this._updateUserNotifications(user, notifications)
          await this.userStore.refreshActiveUserDetails()
        }
      }
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  public async markAllNotificationsRead() {
    try {
      const user = this.user
      if (user) {
        const notifications = toJS(user.notifications)
        notifications?.forEach((notification) => (notification.read = true))

        await this._updateUserNotifications(user, notifications)
        await this.userStore.refreshActiveUserDetails()
      }
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  public async deleteNotification(id: string) {
    try {
      const user = this.user
      if (id && user && user.notifications) {
        const notifications = toJS(user.notifications).filter(
          (notification) => !(notification._id === id),
        )

        await this._updateUserNotifications(user, notifications)
      }
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  private async _updateUserNotifications(user: IUserDB, notifications) {
    const dbRef = this.db
      .collection<INotificationUpdate>(USER_COLLECTION_NAME)
      .doc(user.userName)

    const notificationUpdate = {
      _id: user.userName,
      notifications,
    }

    await dbRef.update(notificationUpdate, { keep_modified_timestamp: true })
  }
}
