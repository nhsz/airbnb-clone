import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  title: string;
  address: string;
}

const ListingDescription: FC<Props> = ({ title, address }) => (
  <Stack>
    <Text color='gray.700' fontWeight={600}>
      {title}
    </Text>
    <Text color='gray.600' fontWeight={300}>
      {address}
    </Text>
  </Stack>
);

export { ListingDescription };
