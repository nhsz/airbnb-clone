import { IResolvers } from 'apollo-server-express';
import { Request } from 'express';
import { Database, User } from '../../../lib/types';
import { authorize } from '../Viewer/utils';
import {
  UserArgs,
  UserBookingsArgs,
  UserBookingsData,
  UserListingsArgs,
  UserListingsData
} from './types';

const userResolvers: IResolvers = {
  Query: {
    user: async (
      _root: undefined,
      { id }: UserArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<User> => {
      try {
        const user = await db.users.findOne({ _id: id });

        if (!user) throw new Error('User not found.');

        const viewer = await authorize(db, req);
        // if viewer and user match, then user is authorized to access sensitive data (bookings, income)
        if (viewer?._id === user._id) user.authorized === true;

        return user;
      } catch (e) {
        throw new Error(`Failed to query user: ${e.message}`);
      }
    }
  },
  User: {
    id: (user: User) => user._id,
    hasWallet: (user: User) => Boolean(user.walletId),
    income: (user: User): number | null => {
      return user.authorized ? user.income : null;
    },
    bookings: async (
      user: User,
      { limit, page }: UserBookingsArgs,
      { db }: { db: Database }
    ): Promise<UserBookingsData | null> => {
      try {
        if (!user.authorized) return null;

        const data: UserBookingsData = {
          total: 0,
          results: []
        };

        let cursor = await db.bookings.find({
          _id: { $in: user.bookings }
        });

        cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
        cursor = cursor.limit(limit);

        return {
          ...data,
          total: await cursor.count(),
          results: await cursor.toArray()
        };
      } catch (e) {
        throw new Error(`Failed to query user bookings: ${e.message}`);
      }
    },
    listings: async (
      user: User,
      { limit, page }: UserListingsArgs,
      { db }: { db: Database }
    ): Promise<UserListingsData> => {
      try {
        const data: UserListingsData = {
          total: 0,
          results: []
        };

        let cursor = await db.listings.find({
          _id: { $in: user.listings }
        });

        cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
        cursor = cursor.limit(limit);

        return {
          ...data,
          total: await cursor.count(),
          results: await cursor.toArray()
        };
      } catch (e) {
        throw new Error(`Failed to query user listings: ${e.message}`);
      }
    }
  }
};

export { userResolvers };
