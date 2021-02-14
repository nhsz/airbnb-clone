import { GoogleOAuth } from '../../../../lib/api';

interface UserInfo {
  userId?: string | null;
  userName?: string | null;
  userAvatar?: string | null;
  userEmail: string | null;
}

const getUserInfo = async (code: string): Promise<UserInfo> => {
  const { user } = await GoogleOAuth.logIn(code);

  if (!user) throw new Error('An error occured while trying to login with Google');

  const { names, photos, emailAddresses } = user;
  const userNamesList = names?.length ? names : null;
  const userPhotosList = photos?.length ? photos : null;
  const userEmailsList = emailAddresses?.length ? emailAddresses : null;

  // user display name
  const userName = userNamesList ? userNamesList[0].displayName : null;

  // user ID
  // const userId =
  //   userNamesList && userNamesList[0].metadata?.source ? userNamesList[0].metadata.source.id : null;
  const metadata = userNamesList && userNamesList[0].metadata ? userNamesList[0].metadata : null;
  const userId = metadata?.source ? metadata.source.id : null;
  // user avatar
  const userAvatar = userPhotosList && userPhotosList[0].url ? userPhotosList[0].url : null;
  // user Email
  const userEmail = userEmailsList && userEmailsList[0].value ? userEmailsList[0].value : null;

  return { userId, userName, userAvatar, userEmail };
};

export { getUserInfo };
