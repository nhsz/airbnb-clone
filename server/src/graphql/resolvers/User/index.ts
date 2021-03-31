import { IResolvers } from 'apollo-server-express';
import { Database, User } from '../../../lib/types';
import { UserArgs } from './types';

const userResolvers: IResolvers = {
  Query: {
    user: async (_root: undefined, { id }: UserArgs, { db }: { db: Database }): Promise<User> => {
      try {
        const user = await db.users.findOne({ _id: id });

        if (!user) throw new Error('User not found.');

        return user;
      } catch (e) {
        throw new Error(`Failed to query user: ${e.message}`);
      }
    }
  }
};

export { userResolvers };
