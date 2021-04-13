import { IResolvers } from 'apollo-server-express';
import { Booking } from '../../../lib/types';

const bookingResolvers: IResolvers = {
  Booking: {
    id: (booking: Booking): string => String(booking._id)
  }
};

export { bookingResolvers };
