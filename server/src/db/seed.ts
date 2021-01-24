// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ObjectId } from 'mongodb';
import connectDB from '.';
import { Listing } from '../lib/types';

const seed = async () => {
  try {
    console.log('[seed]: running...');

    const db = await connectDB();

    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg',
        address: '3210 Scotchmere Dr W, Toronto, ON, CA',
        price: 10000,
        numberOfGuests: 2,
        numberOfBeds: 1,
        numberOfBaths: 2,
        rating: 5
      },
      {
        _id: new ObjectId(),
        title: 'Alegria Downtown',
        image:
          'https://a0.muscache.com/im/pictures/9a343ee3-547f-46b9-a4a5-12b81142562d.jpg?im_w=1200',
        address: 'Rua da Alegria 476, Porto, PT',
        price: 8500,
        numberOfGuests: 4,
        numberOfBeds: 2,
        numberOfBaths: 1,
        rating: 4
      },
      {
        _id: new ObjectId(),
        title: 'Luxurious home with private pool',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg',
        address: '100 Hollywood Hills Dr, Los Angeles, California, USA',
        price: 15000,
        numberOfGuests: 2,
        numberOfBeds: 1,
        numberOfBaths: 1,
        rating: 4
      },

      {
        _id: new ObjectId(),
        title: 'Six Senses 3-Level Dream Views Penthouse',
        image:
          'https://a0.muscache.com/im/pictures/a554d5f6-e719-44d6-a730-bc19dbb967c8.jpg?im_w=1200',
        address: 'Godoy Cruz 2351, Buenos Aires, AR',
        price: 17000,
        numberOfGuests: 2,
        numberOfBeds: 1,
        numberOfBaths: 1,
        rating: 5
      },

      {
        _id: new ObjectId(),
        title: 'Single bedroom located in the heart of downtown San Fransisco',
        image:
          'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg',
        address: '200 Sunnyside Rd, San Fransisco, California, USA',
        price: 25000,
        numberOfGuests: 3,
        numberOfBeds: 2,
        numberOfBaths: 2,
        rating: 3
      }
    ];

    listings.forEach(listing => {
      console.log(`[seed]: now seeding listing ${listing._id}`);
      db.listings.insertOne(listing);
    });

    console.log('[seed]: success!');
  } catch {
    throw new Error('failed to seed the database.');
  }
};

seed();
