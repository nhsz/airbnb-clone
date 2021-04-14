import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  name: string;
  email: string;
  loading?: boolean;
}

const UserProfileDetails: FC<Props> = ({ name, email, loading }) => {
  return (
    <>
      <Heading as='h2' size='md' mb={1} color='gray.700'>
        Details
      </Heading>

      <Stack spacing={2}>
        <Text color='gray.600'>
          Name: <strong>{loading ? 'loading...' : name}</strong>
        </Text>
        <Text color='gray.600'>
          Contact: <strong>{loading ? 'loading...' : email}</strong>
        </Text>
      </Stack>
    </>
  );
};

export { UserProfileDetails };
