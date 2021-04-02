/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_bookings_results_listing {
  __typename: "Listing";
  id: string;
  title: string;
  image: string;
  address: string;
  city: string;
  price: number;
  numberOfGuests: number;
  numberOfBeds: number;
  numberOfBaths: number;
  rating: number;
}

export interface User_user_bookings_results {
  __typename: "Booking";
  id: string;
  listing: User_user_bookings_results_listing;
  checkIn: string;
  checkOut: string;
}

export interface User_user_bookings {
  __typename: "Bookings";
  total: number;
  results: User_user_bookings_results[];
}

export interface User_user_listings_results {
  __typename: "Listing";
  id: string;
  title: string;
  image: string;
  address: string;
  city: string;
  price: number;
  numberOfGuests: number;
  numberOfBeds: number;
  numberOfBaths: number;
  rating: number;
}

export interface User_user_listings {
  __typename: "Listings";
  total: number;
  results: User_user_listings_results[];
}

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  email: string;
  hasWallet: boolean;
  income: number | null;
  bookings: User_user_bookings | null;
  listings: User_user_listings;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
  bookingsPage: number;
  listingsPage: number;
  limit: number;
}
