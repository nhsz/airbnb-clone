import merge from 'lodash.merge';
import { listingResolvers } from './Listing';
import { userResolvers } from './User';
import { viewerResolvers } from './Viewer';

export const resolvers = merge(userResolvers, viewerResolvers, listingResolvers);
