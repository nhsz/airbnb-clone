import {
  Box as Layout,
  Button,
  Heading,
  Image,
  Stack as Card,
  Stack,
  Text
} from '@chakra-ui/react';
import googleLogo from './assets/google_logo.jpg';

const Login = () => {
  return (
    <div>
      <Layout padding={4} d='flex' justifyContent='center' alignItems='center' h='100vh'>
        <Card
          maxWidth={640}
          p={12}
          d='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='xs'
          borderRadius={2}
        >
          <Stack mb={12}>
            <Heading mb={2}>
              <Stack textAlign='center' mb={4}>
                <span role='img' aria-label='wave'>
                  👋
                </span>
              </Stack>
              Log in to <code>airbnb-clone</code>
            </Heading>
            <Text>Sign in with Google to start booking available rentals.</Text>
          </Stack>

          <Stack h='43px' mb={12}>
            <Button
              d='flex'
              colorScheme='blue'
              border='1px'
              borderColor='blue.500'
              color='#fafafa'
              p={0}
              borderRadius={2}
              boxShadow='sm'
            >
              <Image d='inline-block' src={googleLogo} h='100%' borderRadius={1} />
              <Text p={4}>Sign in with Google</Text>
            </Button>
          </Stack>

          <Stack>
            <Text fontSize='sm' color='gray.500'>
              <strong>Note:</strong> By signing in, you'll be redirected to the Google consent form
              to sign in with your Google account.
            </Text>
          </Stack>
        </Card>
      </Layout>
    </div>
  );
};

export { Login };

// .log-in-card__google-button {
//   margin: 40px auto;
//   border-radius: 2px;
//   background-color: #4285f4;
//   box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);
//   border: none;
//   display: flex;
//   align-items: center;
//   padding: 1px;
//   color: #fff;
//   cursor: pointer;
// }
