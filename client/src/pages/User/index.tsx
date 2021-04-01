import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import { USER, User as UserData, UserVariables } from '../../api/graphql/queries';
import { LogIn_logIn as Viewer } from '../../api/types';
import { UserProfile } from '../../components';

interface Props {
  viewer: Viewer;
}

interface MatchParams {
  id: string;
}

const User = ({ match, viewer }: Props & RouteComponentProps<MatchParams>) => {
  console.log({ match });
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
    <div>
      {error && <p>error</p>}

      {loading && <p>loading</p>}

      {user ? <UserProfile user={user} viewerIsUser={viewerIsUser} /> : null}
    </div>
  );
};

export { User };
