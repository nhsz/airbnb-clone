import { Booking, Listing } from '../../../lib/types';

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

interface UserListingsArgs {
  limit: number;
  page: number;
}

interface UserListingsData {
  total: number;
  results: Listing[];
}

export { UserArgs, UserBookingsArgs, UserBookingsData, UserListingsArgs, UserListingsData };
