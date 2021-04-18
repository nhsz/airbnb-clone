import { gql } from '@apollo/client';

const LISTING = gql`
  query Listing($id: ID!, $bookingsPage: Int!, $limit: Int!) {
    listing(id: $id) {
      id
      title
      description
      image
      host {
        id
        name
        avatar
        hasWallet
      }
      type
      address
      city
      bookings(limit: $limit, page: $bookingsPage) {
        total
        results {
          id
          tenant {
            id
            name
            avatar
          }
          checkIn
          checkOut
        }
      }
      bookingsIndex
      price
      numberOfBaths
      numberOfBeds
      numberOfGuests
    }
  }
`;

// export * from './__generated__/AuthUrl';
export { LISTING };
