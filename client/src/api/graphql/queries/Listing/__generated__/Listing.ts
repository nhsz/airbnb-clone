/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Listing
// ====================================================

export interface Listing_listing_host {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  hasWallet: boolean;
}

export interface Listing_listing_bookings_results_tenant {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
}

export interface Listing_listing_bookings_results {
  __typename: "Booking";
  id: string;
  tenant: Listing_listing_bookings_results_tenant;
  checkIn: string;
  checkOut: string;
}

export interface Listing_listing_bookings {
  __typename: "Bookings";
  total: number;
  results: Listing_listing_bookings_results[];
}

export interface Listing_listing {
  __typename: "Listing";
  id: string;
  title: string;
  description: string;
  image: string;
  host: Listing_listing_host;
  type: string;
  address: string;
  city: string;
  bookings: Listing_listing_bookings | null;
  bookingsIndex: string;
  price: number;
  numberOfBaths: number;
  numberOfBeds: number;
  numberOfGuests: number;
}

export interface Listing {
  listing: Listing_listing;
}

export interface ListingVariables {
  id: string;
  bookingsPage: number;
  limit: number;
}
