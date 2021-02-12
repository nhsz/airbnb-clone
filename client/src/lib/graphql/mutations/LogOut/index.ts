import { gql } from '@apollo/client';

const LOG_OUT = gql`
  mutation LogOut {
    logOut {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;

export * from './__generated__/LogOut';
export { LOG_OUT };
