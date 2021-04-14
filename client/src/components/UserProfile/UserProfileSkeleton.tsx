import { Avatar, Box as Layout, Button, Divider, Stack as Card, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { UserProfileAdditionalDetails, UserProfileDetails, UserProfileFooter } from '../UI';

interface Props {
  viewerIsUser: boolean;
}

const UserProfileSkeleton: FC<Props> = ({ viewerIsUser }) => {
  return (
    <Layout
      d='flex'
      justifyContent='center'
      alignItems='center'
      h='100vh'
      style={{ marginTop: '-5rem' }}
    >
      <Card
        w={{ base: 'xs', sm: 'sm' }}
        maxHeight={viewerIsUser ? 512 : 300}
        p={4}
        boxShadow='xs'
        borderRadius={2}
        mt={{ base: 12, sm: 0 }}
      >
        <Stack justifyContent='center' alignItems='center' mb={2}>
          <Avatar size='xl' src={'dummy-avatar'} />
        </Stack>

        <Divider mb={4} />

        <Stack mb={viewerIsUser ? 10 : 4}>
          <UserProfileDetails name='loading...' email='loading...' />
        </Stack>

        {viewerIsUser && (
          <Stack>
            <Stack mb={2}>
              <UserProfileAdditionalDetails />
            </Stack>

            <Stack mb={4}>
              <Button
                h={8}
                w='180px'
                fontSize='sm'
                border='1px'
                color='#fff'
                backgroundColor='#FF5A6B'
                _hover={{ backgroundColor: 'red.400' }}
                borderColor='#FF595F'
                borderRadius={4}
                boxShadow='sm'
              >
                Connect with Stripe!
              </Button>
            </Stack>

            <Stack>
              <UserProfileFooter />
            </Stack>
          </Stack>
        )}
      </Card>
    </Layout>
  );
};

export { UserProfileSkeleton };
