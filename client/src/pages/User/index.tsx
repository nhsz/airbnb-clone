import { useQuery } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import { RouteComponentProps } from 'react-router-dom';
import { USER, User as UserData, UserVariables } from '../../api/graphql/queries';
import { LogIn_logIn as Viewer } from '../../api/types';
import { UserProfile, UserProfileSkeleton } from '../../components';
import { displayErrorNotification } from '../../utils';

interface Props {
  viewer: Viewer;
}

interface MatchParams {
  id: string;
}

const User = ({ match, viewer }: Props & RouteComponentProps<MatchParams>) => {
  const toast = useToast();
  const { params } = match;
  const { id } = params;
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id
    }
  });

  const user = data ? data.user : null;
  const viewerIsUser = viewer.id === id;

  return (
    <>
      {error &&
        displayErrorNotification({
          toast,
          title: "Oops! We weren't able to verify you already log in.",
          description: 'Please try again later.'
        })}

      {loading && <UserProfileSkeleton />}

      {user ? <UserProfile user={user} viewerIsUser={viewerIsUser} /> : null}
    </>
  );
};

export { User };
