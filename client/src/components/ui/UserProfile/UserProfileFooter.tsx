import { Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

const UserProfileFooter: FC = () => {
  return (
    <Text fontSize='sm' color='gray.400'>
      AirBnB uses{' '}
      <Link
        color='red.400'
        href='https://stripe.com/'
        isExternal
        target='_blank'
        rel='noopener noreferrer'
      >
        Stripe
      </Link>{' '}
      to help transfer your earnings in a secure and trusted manner.
    </Text>
  );
};

export { UserProfileFooter };
