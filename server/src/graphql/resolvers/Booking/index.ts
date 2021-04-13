import { IResolvers } from 'apollo-server-express';
import { Booking, Database, Listing } from '../../../lib/types';

const bookingResolvers: IResolvers = {
  Booking: {
    id: (booking: Booking): string => String(booking._id),
    listing: (
      booking: Booking,
      _args: Record<string, unknown>,
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      return db.listings.findOne({ _id: booking.listing });
    }
  }
};

export { bookingResolvers };
