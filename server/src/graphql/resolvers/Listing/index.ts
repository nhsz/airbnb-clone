import { IResolvers } from 'apollo-server-express';
import { Listing } from '../../../lib/types';

const listingResolvers: IResolvers = {
  Listing: {
    id: (listing: Listing): string => String(listing._id)
  }
};

export { listingResolvers };
