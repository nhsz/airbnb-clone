import { Collection, ObjectId } from 'mongodb';

interface Listing {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
  price: number;
  numberOfGuests: number;
  numberOfBeds: number;
  numberOfBaths: number;
  rating: number;
}

interface Database {
  listings: Collection<Listing>;
}

export { Database };
