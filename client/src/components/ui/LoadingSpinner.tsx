import { Center, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const LoadingSpinner: FC = () => (
  <Center>
    <Spinner label='Deletion in progress...' />
  </Center>
);

export { LoadingSpinner };
