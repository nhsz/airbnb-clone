import { IResolvers } from 'apollo-server-express';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { GoogleOAuth } from '../../../lib/api';
import { Database, User, Viewer } from '../../../lib/types';
import { LogInArgs } from './types';
import { cookieOptions, logInViaCookie, logInViaGoogle } from './utils';

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
      { db, req, res }: { db: Database; req: Request; res: Response }
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
          ? await logInViaGoogle(code, sessionToken, db, res)
          : await logInViaCookie(sessionToken, db, req, res);

        // sent client the info that a request has been made but no user info is available
        if (!viewer) return { didRequest: true };

        return {
          _id: viewer._id,
          token: viewer.token,
          avatar: viewer.avatar,
          walletId: viewer.walletId,
          didRequest: true
        };
      } catch (e) {
        throw new Error(`Failed to log in: ${e.message}`);
      }
    },
    logOut: (
      _root: undefined,
      _args: Record<string, unknown>,
      { res }: { res: Response }
    ): Viewer => {
      try {
        res.clearCookie('viewer', cookieOptions);
        return { didRequest: true };
      } catch (e) {
        throw new Error(`Error during log out: ${e.message}`);
      }
    }
  }
};

export { viewerResolvers };
