import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LISTING, Listing as ListingData, ListingVariables } from '../../api/graphql/queries';
import { ErrorBanner, PageSkeleton } from '../../components';

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 8;

const Listing = ({ match }: RouteComponentProps<MatchParams>) => {
  const [bookingsPage, setBookingsPage] = useState(1);
  const { id } = match.params;
  const { loading, data, error } = useQuery<ListingData, ListingVariables>(LISTING, {
    variables: {
      id,
      bookingsPage,
      limit: PAGE_LIMIT
    }
  });

  if (error) {
    return (
      <ErrorBanner
        title={`Oops! We weren't able to load this listing data.`}
        description='Please try again later.'
      />
    );
  }

  if (loading) return <PageSkeleton />;

  const listing = data ? data.listing : null;
  const listingBookings = listing ? listing.bookings : null;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export { Listing };
