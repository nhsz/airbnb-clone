import { IResolvers } from 'apollo-server-express';
import crypto from 'crypto';
import { GoogleOAuth } from '../../../lib/api';
import { Database, User, Viewer } from '../../../lib/types';
import { LogInArgs } from './types';
import { loggedInViaGoogle } from './utils/loggedInViaGoogle';

const viewerResolvers: IResolvers = {
  Viewer: {
    id: (viewer: Viewer) => viewer._id,
    hasWallet: (viewer: Viewer) => (viewer.walletId ? true : false)
  },
  Query: {
    authUrl: (): string => {
      try {
        return GoogleOAuth.authUrl;
      } catch (e) {
        throw new Error(`Failed to request Google Auth URL: ${e.message}`);
      }
    }
  },
  Mutation: {
    logIn: async (
      _root: undefined,
      { input }: LogInArgs,
      { db }: { db: Database }
    ): Promise<Viewer> => {
      try {
        const code = input ? input.code : null;
        /*
          the `sessionToken` string will be randomly generated every time a user is logged in.
          It will be then sent to the client application. The client will use this token on every request,
          which we'll use to authorize that the request is coming from a valid viewer to prevent CSRF attacks.
        */
        const sessionToken = crypto.randomBytes(16).toString('hex');
        const viewer: User | undefined = code
          ? await loggedInViaGoogle(code, sessionToken, db)
          : undefined;

        // sent client the info that a request has been made but no user info is available
        if (!viewer) return { didRequest: true };

        const { _id, token, avatar, walletId } = viewer;
        return {
          _id,
          token,
          avatar,
          walletId,
          didRequest: true
        };
      } catch (e) {
        throw new Error(`Failed to log in: ${e.message}`);
      }
    },
    logOut: (): Viewer => {
      try {
        return { didRequest: true };
      } catch (e) {
        throw new Error(`Error during log out: ${e.message}`);
      }
    }
  }
};

export { viewerResolvers };
