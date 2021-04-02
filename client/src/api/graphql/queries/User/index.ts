import { gql } from '@apollo/client';

const USER = gql`
  query User($id: ID!, $bookingsPage: Int!, $listingsPage: Int!, $limit: Int!) {
    user(id: $id) {
      id
      name
      avatar
      email
      hasWallet
      income
      bookings(limit: $limit, page: $bookingsPage) {
        total
        results {
          id
          listing {
            id
            title
            image
            address
            city
            type
            price
            numberOfGuests
            numberOfBeds
            numberOfBaths
            rating
          }
          checkIn
          checkOut
        }
      }
      listings(limit: $limit, page: $listingsPage) {
        total
        results {
          id
          title
          image
          address
          city
          type
          price
          numberOfGuests
          numberOfBeds
          numberOfBaths
          rating
        }
      }
    }
  }
`;

export * from './__generated__/User';
export { USER };
