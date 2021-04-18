import { IResolvers } from 'apollo-server-express';
import { Request } from 'express';
import { ObjectId } from 'mongodb';
import { Database, Listing, User } from '../../../lib/types';
import { authorize } from '../Viewer/utils';
import { ListingArgs } from './types';

const listingResolvers: IResolvers = {
  Query: {
    listing: async (
      _root: undefined,
      { id }: ListingArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Listing | null> => {
      try {
        const listing = await db.listings.findOne({ _id: new ObjectId(id) });

        if (!listing) throw new Error('Listing not found.');

        const viewer = await authorize(db, req);
        if (viewer && viewer._id === listing.host) listing.authorized = true;

        return listing;
      } catch (e) {
        throw new Error(`Failed to query listing: ${e.message}`);
      }
    }
  },
  Listing: {
    id: (listing: Listing): string => String(listing._id),
    host: async (
      listing: Listing,
      _args: Record<string, unknown>,
      { db }: { db: Database }
    ): Promise<User> => {
      const host = await db.users.findOne({ _id: listing.host });

      if (!host) throw new Error('Host not found.');

      return host;
    },
    bookingsIndex: (listing: Listing) => JSON.stringify(listing.bookingsIndex)
  }
};

export { listingResolvers };
