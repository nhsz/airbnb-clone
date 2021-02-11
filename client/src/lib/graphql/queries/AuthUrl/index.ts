import { gql } from '@apollo/client';

const AUTH_URL = gql`
  query AuthUrl {
    authUrl
  }
`;

export { AUTH_URL };
