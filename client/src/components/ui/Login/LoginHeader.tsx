import { Heading, Stack, Text } from '@chakra-ui/react';

interface Props {
  description: string;
}

const LoginHeader = ({ description }: Props) => {
  return (
    <Stack mb={12}>
      <Heading mb={2}>
        <Stack textAlign='center' mb={4}>
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
