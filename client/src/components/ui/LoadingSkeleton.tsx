import { SkeletonText, Stack, StackDivider, VStack } from '@chakra-ui/react';
import { FC } from 'react';

const LoadingSkeleton: FC = () => (
  <VStack divider={<StackDivider borderColor='gray.200' />} spacing={12} align='stretch'>
    <Stack>
      <SkeletonText noOfLines={2} spacing='4' />
    </Stack>
    <Stack>
      <SkeletonText noOfLines={2} spacing='4' />
    </Stack>
    <Stack>
      <SkeletonText noOfLines={2} spacing='4' />
    </Stack>
  </VStack>
);

export { LoadingSkeleton };
