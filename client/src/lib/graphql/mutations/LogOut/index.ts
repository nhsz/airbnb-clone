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

export { LOG_OUT };
