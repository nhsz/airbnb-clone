import { SkeletonText, Stack, VStack } from '@chakra-ui/react';
import { FC } from 'react';

const PageSkeleton: FC = () => (
  <VStack spacing={16} align='stretch' p={24} justifyContent='center'>
    <Stack>
      <SkeletonText noOfLines={3} spacing='4' />
    </Stack>
    <Stack>
      <SkeletonText noOfLines={3} spacing='4' />
    </Stack>
    <Stack>
      <SkeletonText noOfLines={3} spacing='4' />
    </Stack>
  </VStack>
);

export { PageSkeleton };
