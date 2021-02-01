// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import connectDB from '.';

const drop = async () => {
  try {
    console.log('[info]: running...');
    console.log(' ');

    const db = await connectDB();
    // get collections to check if they're empty before attempting deletion
    const bookings = await db.bookings.find().toArray();
    const listings = await db.listings.find().toArray();
    const users = await db.users.find().toArray();

    if (listings.length) {
      console.log('[drop]: dropping listings');
      await db.listings.drop();
    }

    if (bookings.length) {
      console.log('[drop]: dropping bookings');
      await db.bookings.drop();
    }

    if (users.length) {
      console.log('[drop]: dropping users');
      await db.users.drop();
    }

    console.log(' ');
    console.log('[info]: all collections have been dropped succesfully. 👌');
  } catch {
    throw new Error('failed drop the collection.');
  }
};

drop();
