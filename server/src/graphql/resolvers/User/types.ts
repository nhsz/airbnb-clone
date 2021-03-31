import { Booking } from '../../../lib/types';

interface UserArgs {
  id: string;
}

interface UserBookingsArgs {
  limit: number;
  page: number;
}

interface UserBookingsData {
  total: number;
  results: Booking[];
}

export { UserArgs, UserBookingsArgs, UserBookingsData };
