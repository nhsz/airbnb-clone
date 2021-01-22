const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numberOfGuests
      numberOfBeds
      numberOfBaths
      rating
    }
  }
`;

const DELETE_LISTINGS = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      title
      image
      address
      price
      numberOfGuests
      numberOfBeds
      numberOfBaths
      rating
    }
  }
`;

export { LISTINGS, DELETE_LISTINGS };
