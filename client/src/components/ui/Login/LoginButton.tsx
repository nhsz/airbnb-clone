import { Button, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import googleLogo from '../../../pages/Login/assets/google_logo.svg';

interface Props {
  handleAuthorize: () => Promise<void>;
}

const LoginButton: FC<Props> = ({ handleAuthorize }) => {
  return (
    <Button
      d='flex'
      colorScheme='blue'
      border='1px'
      borderColor='blue.500'
      _hover={{ backgroundColor: 'blue.600', borderColor: 'blue.600' }}
      color='#fafafa'
      p={0}
      borderRadius={2}
      boxShadow='sm'
      onClick={handleAuthorize}
    >
      <Image
        d='inline-block'
        src={googleLogo}
        h='100%'
        borderRadius={1}
        p={2}
        backgroundColor='#fff'
      />
      <Text p={4}>Sign in with Google</Text>
    </Button>
  );
};

export { LoginButton };
