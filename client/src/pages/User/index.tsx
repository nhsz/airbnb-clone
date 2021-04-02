import { useQuery } from '@apollo/client';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { USER, User as UserData, UserVariables } from '../../api/graphql/queries';
import { LogIn_logIn as Viewer } from '../../api/types';
import { ErrorBanner, UserListings, UserProfile, UserProfileSkeleton } from '../../components';

interface Props {
  viewer: Viewer;
}

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 4;

const User = ({ match, viewer }: Props & RouteComponentProps<MatchParams>) => {
  const [listingsPage, setListingsPage] = useState(1);
  const [bookingsPage, setBookingsPage] = useState(1);
  const {
    params: { id }
  } = match;
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id,
      bookingsPage,
      listingsPage,
      limit: PAGE_LIMIT
    }
  });

  const user = data ? data.user : null;
  const viewerIsUser = viewer.id === id;

  const userListings = user ? user.listings : null;
  const userBookings = user ? user.bookings : null;

  console.log({ data });

  if (error) {
    return (
      <ErrorBanner
        title={`Oops! We weren't able to load this user profile data.`}
        description='Please try again later.'
      />
    );
  }

  if (loading) {
    return <UserProfileSkeleton />;
  }

  return user ? (
    <Stack p={7}>
      <Stack mb={24}>
        <UserProfile user={user} viewerIsUser={viewerIsUser} />
      </Stack>

      <Stack>
        <Stack>
          {userListings && (
            <UserListings
              userListings={userListings}
              listingsPage={listingsPage}
              setListingsPage={setListingsPage}
              limit={PAGE_LIMIT}
            />
          )}
        </Stack>

        {/* <Stack>
          {userBookings && (
            <UserBookings
              userBookings={userBookings}
              bookingsPage={bookingsPage}
              limit={PAGE_LIMIT}
              setBookingsPage={setBookingsPage}
            />
          )}
        </Stack> */}
      </Stack>
    </Stack>
  ) : null;
};

export { User };
