import { Request, Response } from 'express';
import { Database, User } from '../../../../lib/types';
import { cookieOptions } from '../utils';

const logInViaCookie = async (
  token: string,
  db: Database,
  req: Request,
  res: Response
): Promise<User | undefined> => {
  const updateRes = await db.users.findOneAndUpdate(
    { _id: req.signedCookies.viewer },
    { $set: { token } },
    { returnOriginal: false }
  );

  const viewer = updateRes.value;
  if (!viewer) res.clearCookie('viewer', cookieOptions);

  return viewer;
};

export { logInViaCookie };
