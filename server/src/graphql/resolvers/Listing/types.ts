import { Booking } from '../../../lib/types';

interface ListingArgs {
  id: string;
}

interface ListingBookingsArgs {
  limit: number;
  page: number;
}

interface ListingBookingsData {
  total: number;
  results: Booking[];
}

export { ListingArgs, ListingBookingsArgs, ListingBookingsData };
