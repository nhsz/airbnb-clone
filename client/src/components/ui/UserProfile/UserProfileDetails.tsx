import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  name: string;
  email: string;
}

const UserProfileDetails: FC<Props> = ({ name, email }) => {
  return (
    <>
      <Heading as='h2' size='md' mb={1} color='gray.700'>
        Details
      </Heading>

      <Stack spacing={2}>
        <Text color='gray.600'>
          Name: <strong>{name}</strong>
        </Text>
        <Text color='gray.600'>
          Contact: <strong>{email}</strong>
        </Text>
      </Stack>
    </>
  );
};

export { UserProfileDetails };
