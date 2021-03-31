import { IResolvers } from 'apollo-server-express';
import { Request } from 'express';
import { Database, User } from '../../../lib/types';
import { authorize } from '../Viewer/utils';
import { UserArgs } from './types';

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
    id: () => {},
    hasWallet: () => {},
    income: () => {},
    bookings: () => {},
    listings: () => {}
  }
};

export { userResolvers };
