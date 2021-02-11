import { useApolloClient, useMutation } from '@apollo/client';
import { Box as Layout, Spinner, Stack as Card, Stack, useToast } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginButton, LoginFooter, LoginHeader } from '../../components/ui/';
import { LogIn as LogInData, LogInVariables, LOG_IN } from '../../lib/graphql/mutations';
import { AUTH_URL } from '../../lib/graphql/queries';
import { AuthUrl as AuthUrlData } from '../../lib/graphql/queries/';
import { LogIn_logIn as Viewer } from '../../lib/types';

interface Props {
  setViewer: (viewer: Viewer) => void;
}

const Login = ({ setViewer }: Props) => {
  const client = useApolloClient();
  const toast = useToast();
  const [logIn, { data: logInData, loading: logInLoading, error: logInError }] = useMutation<
    LogInData,
    LogInVariables
  >(LOG_IN, {
    onCompleted: data => {
      if (data && data.logIn) {
        setViewer(data.logIn);
        toast({
          position: 'top-right',
          title: "You've successfully logged in!",
          status: 'success',
          duration: 4000,
          isClosable: true
        });
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

      toast({
        position: 'top-right',
        title: 'Error while trying to log in. Please try again later.',
        status: 'error',
        duration: 4000,
        isClosable: true
      });
    }
  };

  if (logInError) {
    toast({
      position: 'top-right',
      title: 'Oops, something went wrong.',
      description: 'Please check your connection and/or try again later.',
      status: 'error',
      duration: 4000,
      isClosable: true
    });
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;

    return <Redirect to={`/user/${viewerId}`} />;
  }

  return (
    <Layout padding={4} d='flex' justifyContent='center' alignItems='center' h='100vh'>
      {logInLoading ? (
        <Spinner />
      ) : (
        <Card
          maxWidth={640}
          p={12}
          d='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='xs'
          borderRadius={2}
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
