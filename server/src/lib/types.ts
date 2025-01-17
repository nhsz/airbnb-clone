import { Collection, ObjectId } from 'mongodb';

interface Viewer {
  _id?: string;
  token?: string;
  avatar?: string;
  walletId?: string;
  didRequest: boolean;
}

type ListingType = 'APARTMENT' | 'HOUSE';

interface BookingsIndexMonth {
  [key: string]: boolean;
}

interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

// Bookings Index example
// {
//   "2019": {
//     "00": {
//       "01": true,
//       "02": true
//     },
//     "04": {
//       "31": true
//     },
//     "05": {
//       "01": true
//     },
//     "06": {
//       "20": true
//     }
//   }
// };

interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  host: string; // host id, 1-to-1 relationship with a user (a listing can only have 1 host)
  type: ListingType;
  address: string;
  country: string;
  city: string;
  bookings: ObjectId[];
  bookingsIndex: BookingsIndex;
  price: number;
  numberOfGuests: number;
  numberOfBeds: number;
  numberOfBaths: number;
  rating: number;
  authorized?: boolean;
}

interface User {
  _id: string; // use `string` type instead of `ObjectId` to be compatible with auth service
  token: string;
  name: string;
  avatar: string;
  email: string;
  walletId?: string;
  income: number;
  bookings: ObjectId[]; // 1-to-many relationship with a booking inside the `bookings` collection
  listings: ObjectId[]; // 1-to-many relationship with a listing inside the `listings` collection (if user is a Host)
  authorized?: boolean;
}

interface Booking {
  _id: ObjectId;
  listing: ObjectId; // 1-to-1 relationship with a listing
  tenant: string; // 1-to-1 relationship with a user
  checkIn: string;
  checkOut: string;
}

interface Database {
  bookings: Collection<Booking>;
  listings: Collection<Listing>;
  users: Collection<User>;
}

export { Booking, Database, Listing, User, Viewer };
