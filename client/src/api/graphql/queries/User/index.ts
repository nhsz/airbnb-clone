import { gql } from '@apollo/client';

const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
      email
      hasWallet
      income
    }
  }
`;

export * from './__generated__/User';
export { USER };
