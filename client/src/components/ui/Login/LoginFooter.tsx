import { Text } from '@chakra-ui/react';

const LoginFooter = () => {
  return (
    <Text fontSize='sm' color='gray.500'>
      <strong>Note:</strong> By signing in, you'll be redirected to the Google consent form to sign
      in with your Google account.
    </Text>
  );
};

export { LoginFooter };
