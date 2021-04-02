import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { USER, User as UserData, UserVariables } from '../../api/graphql/queries';
import { LogIn_logIn as Viewer } from '../../api/types';
import { ErrorBanner, UserProfile, UserProfileSkeleton } from '../../components';

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

  return user ? <UserProfile user={user} viewerIsUser={viewerIsUser} /> : null;
};

export { User };
