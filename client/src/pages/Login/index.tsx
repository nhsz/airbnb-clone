import { useApolloClient, useMutation } from '@apollo/client';
import { Box as Layout, Spinner, Stack as Card, Stack, useToast } from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { LogIn as LogInData, LogInVariables, LOG_IN } from '../../api/graphql/mutations';
import { AuthUrl as AuthUrlData, AUTH_URL } from '../../api/graphql/queries';
import { LogIn_logIn as Viewer } from '../../api/types';
import { LoginButton, LoginFooter, LoginHeader } from '../../components/';
import { displayErrorNotification, displaySuccessNotification } from '../../utils';

interface Props {
  setViewer: (viewer: Viewer) => void;
}

const Login: FC<Props> = ({ setViewer }) => {
  const client = useApolloClient();
  const toast = useToast();
  const [logIn, { data: logInData, loading: logInLoading, error: logInError }] = useMutation<
    LogInData,
    LogInVariables
  >(LOG_IN, {
    onCompleted: data => {
      const { token } = data.logIn;

      if (data && data.logIn && token) {
        setViewer(data.logIn);
        sessionStorage.setItem('token', token);
        displaySuccessNotification({ toast, title: "You've successfully logged in!" });
      }
    }
  });
  const logInRef = useRef(logIn);

  useEffect(() => {
    // get auth code from url
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      // execute mutation to get viewer profile data
      logInRef.current({
        variables: { input: { code } }
      });
    }
  }, []);

  const handleAuthorize = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL
      });
      window.location.href = data.authUrl;
    } catch (e) {
      console.error(e.message);
      displayErrorNotification({
        toast,
        title: 'Error while trying to log in. Please try again later.'
      });
    }
  };

  if (logInError) {
    displayErrorNotification({
      toast,
      title: 'Oops, something went wrong.',
      description: 'Please check your connection and try again later.'
    });
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;

    return <Redirect to={`/user/${viewerId}`} />;
  }

  return (
    <Layout
      padding={4}
      d='flex'
      justifyContent='center'
      alignItems='center'
      h='100vh'
      style={{ marginTop: '-5rem' }}
    >
      {logInLoading ? (
        <Spinner label='Logging in...' size='xl' color='#FF5A6B' thickness='4px' />
      ) : (
        <Card
          maxWidth={640}
          p={10}
          d='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='xs'
          borderRadius={2}
          mt={{ base: 10, sm: 0 }}
        >
          <LoginHeader description='Sign in with Google to start booking available rentals.' />

          <Stack h='43px' mb={12}>
            <LoginButton handleAuthorize={handleAuthorize} />
          </Stack>

          <Stack>
            <LoginFooter />
          </Stack>
        </Card>
      )}
    </Layout>
  );
};

export { Login };
