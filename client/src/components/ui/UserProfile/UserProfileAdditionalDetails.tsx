import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

const UserProfileAdditionalDetails: FC = () => {
  return (
    <>
      <Heading as='h2' size='md' mb={1} color='gray.700'>
        Additional details
      </Heading>

      <Stack spacing={0}>
        <Text color='gray.600'>Interested in becoming a host?</Text>
        <Text color='gray.600'>
          Register with you <strong>Stripe</strong> account!
        </Text>
      </Stack>
    </>
  );
};

export { UserProfileAdditionalDetails };
