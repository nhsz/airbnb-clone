import { Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const HomeSkeleton: FC = () => {
  return (
    <Flex h='100vh' justifyContent='center' alignItems='center' style={{ marginTop: '-5.5rem' }}>
      <Spinner label='Loading app...' size='xl' color='#FF5A6B' thickness='4px' />
    </Flex>
  );
};

export { HomeSkeleton };
