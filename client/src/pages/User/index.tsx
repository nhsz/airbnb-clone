import { useQuery } from '@apollo/client';
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

const User = ({ match, viewer }: Props & RouteComponentProps<MatchParams>) => {
  const { params } = match;
  const { id } = params;
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id
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

  return <>{user ? <UserProfile user={user} viewerIsUser={viewerIsUser} /> : null}</>;
};

export { User };
