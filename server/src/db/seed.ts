// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ObjectId } from 'mongodb';
import connectDB from '.';
import { Listing, User } from '../lib/types';

const listings: Listing[] = [
  {
    _id: new ObjectId('5d378db94e84753160e08b30'),
    title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
    description:
      '2 bed, 2 bathroom cozy apartment in the heart of downtown Toronto and only 5 min away from the CN Tower, Scotiabank Arena, and Rogers Center.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg',
    hostId: '5d378db94e84753160e08b57',
    type: 'Apartment',
    address: '3210 Scotchmere Dr W, Toronto, ON, CA',
    country: 'Canada',
    city: 'Toronto',
    bookings: [],
    bookingsIndex: {},
    price: 10000,
    numberOfGuests: 2,
    numberOfBeds: 1,
    numberOfBaths: 2,
    rating: 5
  },
  {
    _id: new ObjectId('5d378db94e84753160e08f86'),
    title: 'Alegria Downtown',
    description:
      'With a privileged location, in the Porto’s downtown historical center, you will be delighted by this apartment.',
    image: 'https://a0.muscache.com/im/pictures/9a343ee3-547f-46b9-a4a5-12b81142562d.jpg?im_w=1200',
    hostId: '5d378db94e84753160e08c63',
    type: 'House',
    address: 'Rua da Alegria 476, Porto, PT',
    country: 'Portugal',
    city: 'Porto',
    bookings: [],
    bookingsIndex: {},
    price: 8500,
    numberOfGuests: 4,
    numberOfBeds: 2,
    numberOfBaths: 1,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b40'),
    title: 'Luxurious home with private pool',
    description:
      'Set on a private, southwest corner of Hollywood Hills; this large modern home includes high-end furnishings, a wine cellar, private pool, extraordinary views of the greater Los Angeles area.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg',
    hostId: '5d378db94e84753160e08b58',
    type: 'House',
    address: '100 Hollywood Hills Dr, Los Angeles, California',
    country: 'United States',
    city: 'Los Angeles',
    bookings: [],
    bookingsIndex: {},
    price: 18127,
    numberOfGuests: 2,
    numberOfBeds: 1,
    numberOfBaths: 1,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08e85'),
    title: 'Six Senses 3-Level Dream Views Penthouse',
    description:
      'Amazing one-bedroom apartment with spectacular views of Palermo, the river and the city. Located in Palermo Soho on a 19th floor this 3-level apartment has everything you need to live a unique Buenos Aires experience.',
    image: 'https://a0.muscache.com/im/pictures/a554d5f6-e719-44d6-a730-bc19dbb967c8.jpg?im_w=1200',
    hostId: '5d378db94e84753160e08f41',
    type: 'House',
    address: 'Godoy Cruz 2351, Buenos Aires, AR',
    country: 'Argentina',
    city: 'Buenos Aires',
    bookings: [],
    bookingsIndex: {},
    price: 17000,
    numberOfGuests: 2,
    numberOfBeds: 1,
    numberOfBaths: 1,
    rating: 5
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b50'),
    title: 'Single bedroom located in the heart of downtown San Fransisco',
    description:
      'Furnished and spacious single bedroom location situated minutes away from the nearest Muni train stop. Perfect for the independent traveller.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg',
    hostId: '5d378db94e84753160e08b56',
    type: 'Apartment',
    address: '200 Sunnyside Rd, San Fransisco, California, USA',
    country: 'United States',
    city: 'San Francisco',
    bookings: [],
    bookingsIndex: {},
    price: 22500,
    numberOfGuests: 5,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b53'),
    title: 'Spacious 2 story beach house',
    description:
      'Spacious 2 story house with extended balcony and magnificent ocean views from every window. Numerous restaurants exist only a walking distance away.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646430/mock/Cancun/cancun-listing-1_zihihs.jpg',
    hostId: '5d378db94e84753160e08b56',
    type: 'House',
    address: '100 Punta Nizuc Rd., Cancún, Mexico',
    country: 'Mexico',
    city: 'Cancún',
    bookings: [],
    bookingsIndex: {},
    price: 24842,
    numberOfGuests: 5,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b54'),
    title: 'Beachfront suite',
    description:
      'Beautiful beachfront suite located in Cancún hotel. Location consists of a large outdoor pool, parking, hotel convenience store, room service, and parking!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646289/mock/Cancun/cancun-listing-2_bsocu5.jpg',
    hostId: '5d378db94e84753160e08b56',
    type: 'Apartment',
    address: '100 Punta Nizuc Rd., Cancún, Mexico',
    country: 'Mexico',
    city: 'Cancún',
    bookings: [],
    bookingsIndex: {},
    price: 23012,
    numberOfGuests: 3,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b48'),
    title: 'Chic condo in Camden',
    description:
      'Chic, cosy condo situated in Camden. Situated in a secluded and private neighbourhood with easy acces to public transit.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645408/mock/London/london-listing-1_yedylx.jpg',
    hostId: '5d378db94e84753160e08b57',
    type: 'Apartment',
    address: '3807 North Bend River Rd, London, United Kingdom',
    country: 'United Kingdom',
    city: 'London',
    bookings: [],
    bookingsIndex: {},
    price: 19462,
    numberOfGuests: 3,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b49'),
    title: 'Beautiful apartment in central London',
    description:
      'Beautiful and modern apartment situated in central London and minutes away from the London Underground (railway system).',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-2_mtfogm.jpg',
    hostId: '5d378db94e84753160e08b59',
    type: 'Apartment',
    address: '1738 Old House Dr, London, United Kingdom',
    country: 'United Kingdom',
    city: 'London',
    bookings: [],
    bookingsIndex: {},
    price: 9425,
    numberOfGuests: 3,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b31'),
    title: 'Cozy, clean, and affordable studio in midtown',
    description:
      'Cozy, clean, and affordable studio located around midtown. Perfect for a solo traveller on a budget.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641351/mock/Toronto/toronto-listing-2_aeg1rw.jpg',
    hostId: '5d378db94e84753160e08b55',
    type: 'Apartment',
    address: '7009 Strawberry Street, Toronto, ON, CA',
    country: 'Canada',
    city: 'Toronto',
    bookings: [],
    bookingsIndex: {},
    price: 15806,
    numberOfGuests: 2,
    numberOfBeds: 2,
    numberOfBaths: 1,
    rating: 3
  },
  {
    _id: new ObjectId('5d378db94e84753160e08b32'),
    title: 'Bright comfortable room within a 4 bedroom duplex',
    description:
      'Bright comfortable room within a 4 bedroom duplex. 10 min drive from local airport. Relax, re-charge your batteries, and enjoy the suburbs of the Greater Toronto Area in this comfortable setting.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-3_eyftou.jpg',
    hostId: '5d378db94e84753160e08b57',
    type: 'House',
    address: '8110 Rockaway Ave, Toronto, ON, CA',
    country: 'Canada',
    city: 'Toronto',
    bookings: [],
    bookingsIndex: {},
    price: 4055,
    numberOfGuests: 4,
    numberOfBeds: 2,
    numberOfBaths: 2,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e07a33'),
    title: 'One bedroom apartment in the góthic quarter',
    description:
      'One-bedroom apartment in neoclassical building, furnished and equipped of aprox. 35m² in the "Barri Gòtic" of Barcelona. With a double room, living room, kitchen with dining area and bathroom.',
    image: 'https://a0.muscache.com/im/pictures/ff3e097e-2e36-4abb-917f-a815da546673.jpg?im_w=1200',
    hostId: '5d378db94e84753160e08b55',
    type: 'Apartment',
    address: '9 Baixada de Sant Miquel, Barcelona, Spain',
    country: 'Spain',
    city: 'Barcelona',
    bookings: [],
    bookingsIndex: {},
    price: 8055,
    numberOfGuests: 2,
    numberOfBeds: 1,
    numberOfBaths: 1,
    rating: 4
  },
  {
    _id: new ObjectId('5d378db94e84753160e06f44'),
    title: 'The Loft at Classic Canal',
    description:
      'Your window situated right on the Canal. Located in the very centre of classic canal district, lovely designed with eye for detail, we offer a relaxing haven in the midst of the city centre.',
    image: 'https://a0.muscache.com/im/pictures/adbe755c-de28-423b-85db-c275b04b2b13.jpg?im_w=1200',
    hostId: '5d378db94e84753160e08b56',
    type: 'House',
    address: '79 Laurierstraat, Amsterdam, Netherlands',
    country: 'Netherlands',
    city: 'Amsterdam',
    bookings: [],
    bookingsIndex: {},
    price: 12055,
    numberOfGuests: 4,
    numberOfBeds: 2,
    numberOfBaths: 1,
    rating: 5
  }
];
const users: User[] = [
  {
    _id: '5d378db94e84753160e08b55',
    token: 'token_************',
    name: 'James J.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg',
    email: 'james@april.biz',
    walletId: 'acct_************',
    income: 723796,
    bookings: [],
    listings: [new ObjectId('5d378db94e84753160e08b31'), new ObjectId('5d378db94e84753160e08b32')]
  },
  {
    _id: '5d378db94e84753160e08b56',
    token: 'token_************',
    name: 'Elizabeth A.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg',
    email: 'elizabeth@asper.info',
    walletId: 'acct_************',
    income: 256144,
    bookings: [],
    listings: [
      new ObjectId('5d378db94e84753160e08b50'),
      new ObjectId('5d378db94e84753160e08b53'),
      new ObjectId('5d378db94e84753160e08b54')
    ]
  },
  {
    _id: '5d378db94e84753160e08b57',
    token: 'token_************',
    name: 'Andrew D.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg',
    email: 'andrew@gmail2.com',
    walletId: 'acct_************',
    income: 272359,
    bookings: [],
    listings: [new ObjectId('5d378db94e84753160e08b30'), new ObjectId('5d378db94e84753160e08b48')]
  },
  {
    _id: '5d378db94e84753160e08b58',
    token: 'token_************',
    name: 'Danielle C.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650165/mock/users/user-profile-4_wxi6om.jpg',
    email: 'danielle@yahoo.com',
    walletId: 'acct_************',
    income: 465043,
    bookings: [],
    listings: [new ObjectId('5d378db94e84753160e08b40'), new ObjectId('5d378db94e84753160e06f44')]
  },
  {
    _id: '5d378db94e84753160e08b59',
    token: 'token_************',
    name: 'Sarah K.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650436/mock/users/user-profile-5_tm8hhl.jpg',
    email: 'sarah@hotmail.com',
    walletId: 'acct_************',
    income: 104347,
    bookings: [],
    listings: [
      new ObjectId('5d378db94e84753160e08b49'),
      new ObjectId('5d378db94e84753160e08f86'),
      new ObjectId('5d378db94e84753160e07a33')
    ]
  }
];

const seed = async () => {
  try {
    console.log('[info]: running...');
    console.log(' ');

    const db = await connectDB();

    listings.forEach(listing => {
      console.log(`[seed]: seeding listing ${listing._id} ✅`);
      db.listings.insertOne(listing);
    });

    users.forEach(user => {
      console.log(`[seed]: seeding user    ${user._id} ✅`);
      db.users.insertOne(user);
    });

    console.log(' ');
    console.log('[info]: success! 🎉');
    console.log(`[info]: listings seeded: ${listings.length}`);
    console.log(`[info]: users seeded: ${users.length}`);
  } catch {
    throw new Error('failed to seed the database.');
  }
};

seed();
