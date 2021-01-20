interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numberOfGuests: number;
  numberOfBeds: number;
  numberOfBaths: number;
  rating: number;
}

interface ListingsData {
  listings: Listing[];
}

interface DeleteListingData {
  deleteListing: Listing;
}

interface DeleteListingVariables {
  id: string;
}

export type { Listing, ListingsData, DeleteListingData, DeleteListingVariables };
