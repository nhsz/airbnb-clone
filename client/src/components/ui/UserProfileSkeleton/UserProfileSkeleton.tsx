import {
  Box,
  Box as Layout,
  Divider,
  SkeletonCircle,
  SkeletonText,
  Stack as Card
} from '@chakra-ui/react';
import { FC } from 'react';

const UserProfileSkeleton: FC = () => {
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
        p={4}
        boxShadow='xs'
        borderRadius={2}
        mt={{ base: 12, sm: 0 }}
      >
        <Box bg='white'>
          <SkeletonCircle mb={4} size='24' mx='auto' />

          <Divider mb={4} />

          <SkeletonText mt={4} mb={16} noOfLines={3} spacing='4' />
          <SkeletonText mb={24} noOfLines={3} spacing='5' />
          <SkeletonText noOfLines={3} spacing='5' />
        </Box>
      </Card>
    </Layout>
  );
};

export { UserProfileSkeleton };
