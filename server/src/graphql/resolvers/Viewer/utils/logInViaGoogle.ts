import { Response } from 'express';
import { cookieOptions, getUserInfo } from '.';
import { Database, User } from '../../../../lib/types';

const logInViaGoogle = async (
  code: string,
  token: string,
  db: Database,
  res: Response
): Promise<User | undefined> => {
  const { userId, userName, userAvatar, userEmail } = await getUserInfo(code);

  if (!userId || !userName || !userAvatar || !userEmail) {
    throw new Error('Failed to log in with Google');
  }

  // if user already exists in db, update it
  const updateUser = await db.users.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        name: userName,
        avatar: userAvatar,
        email: userEmail,
        token
      }
    },
    { returnOriginal: false }
  );

  // if user doesn't exists in db, create it
  let viewer = updateUser.value;

  if (!viewer) {
    const insertResult = await db.users.insertOne({
      _id: userId,
      token,
      name: userName,
      avatar: userAvatar,
      email: userEmail,
      income: 0,
      bookings: [],
      listings: []
    });

    const ONE_YEAR_EXP = 1000 * 60 * 60 * 24 * 365;
    res.cookie('viewer', userId, {
      ...cookieOptions,
      maxAge: ONE_YEAR_EXP
    });

    viewer = insertResult.ops[0];
  }

  return viewer;
};

export { logInViaGoogle };
