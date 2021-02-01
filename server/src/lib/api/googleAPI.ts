import { google } from 'googleapis';

const auth = new google.auth.OAuth2(
  process.env.G_OAUTH_CLIENT_ID,
  process.env.G_OAUTH_CLIENT_SECRET,
  `${process.env.PUBLIC_URL}/login` // redirect URL
);

const GoogleOAuth = {
  authUrl: auth.generateAuthUrl({
    access_type: 'online',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ]
  }),
  logIn: async (authCode: string) => {
    const { tokens } = await auth.getToken(authCode); // get access token & refresh token
    auth.setCredentials(tokens); // configure auth object

    // https://developers.google.com/people/api/rest/v1/people/get
    const { data } = await google.people({ version: 'v1', auth }).people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses,names,photos'
    });

    return {
      user: data
    };
  }
};

export { GoogleOAuth };
