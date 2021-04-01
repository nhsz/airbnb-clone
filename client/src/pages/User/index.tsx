import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import { USER, User as UserData, UserVariables } from '../../api/graphql/queries';
import { UserProfile } from '../../components';

interface MatchParams {
  id: string;
}

const User = ({ match }: RouteComponentProps<MatchParams>) => {
  console.log({ match });
  const { params } = match;
  const { id } = params;
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id
    }
  });

  const user = data ? data.user : null;

  return (
    <div>
      {error && <p>error</p>}

      {loading && <p>loading</p>}

      {/* {<pre>{JSON.stringify(user, null, 2)}</pre>} */}

      {user ? <UserProfile user={user} /> : null}
    </div>
  );
};

export { User };
