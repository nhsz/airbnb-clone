import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  description: string;
}

const LoginHeader: FC<Props> = ({ description }) => {
  return (
    <Stack mb={12}>
      <Heading mb={2}>
        <Stack mb={4} textAlign='center'>
          <span role='img' aria-label='wave'>
            👋
          </span>
        </Stack>
        Log in to <code>airbnb-clone</code>
      </Heading>
      <Text>{description}</Text>
    </Stack>
  );
};

export { LoginHeader };
