import { IResolvers } from 'apollo-server-express';
import { ObjectId } from 'mongodb';
import { Database, Listing } from '../../../lib/types';

const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: Record<string, never>,
      { db }: { db: Database }
    ): Promise<Listing[]> => await db.listings.find({}).toArray()
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleted = await db.listings.findOneAndDelete({ _id: new ObjectId(id) });

      if (!deleted.value) throw new Error('failed to delete listing.');
      return deleted.value;
    }
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString()
  }
};

export { listingResolvers };
