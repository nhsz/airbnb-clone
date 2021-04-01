import { gql } from '@apollo/client';

const AUTH_URL = gql`
  query AuthUrl {
    authUrl
  }
`;

export * from './__generated__/AuthUrl';
export { AUTH_URL };
