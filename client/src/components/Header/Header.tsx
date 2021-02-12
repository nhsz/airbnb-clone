import { Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LogIn_logIn as Viewer } from '../../lib/types';
import appLogo from './assets/logo.png';
import UserMenu from './Menu/UserMenu';

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const Header = ({ viewer, setViewer }: Props) => {
  return (
    <Flex
      w='100%'
      h={16}
      px='6'
      align='center'
      justify='space-between'
      as='nav'
      padding={4}
      justifyContent='space-between'
      alignItems='center'
      boxShadow='sm'
      backgroundColor='#fff'
      borderTop='2px'
      borderTopColor='#FF5A6B'
      zIndex={1}
      style={{ position: 'fixed', top: 0 }}
    >
      <Link to='/'>
        <Image d='block' src={appLogo} h={10} borderRadius={1} />
      </Link>

      <Stack direction='row' d='flex' alignItems='center'>
        <Stack mr={{ base: 4, sm: 10 }}>
          <Link to='/host'>
            <Text color='gray.500' fontWeight={500} fontSize='sm' _hover={{ color: '#FF5A6B' }}>
              <Icon style={{ position: 'relative', bottom: '1.25px' }} mr={1} as={HiOutlineHome} />{' '}
              Become a host
            </Text>
          </Link>
        </Stack>

        {viewer.id ? (
          <UserMenu id={viewer.id} avatar={viewer.avatar} setViewer={setViewer} />
        ) : (
          <Link to='/login'>
            <Button
              h={8}
              mr={{ base: 2, sm: 8 }}
              fontSize='sm'
              border='1px'
              color='#fff'
              backgroundColor='#FF5A6B'
              _hover={{ backgroundColor: 'red.400' }}
              borderColor='#FF595F'
              borderRadius={4}
              boxShadow='sm'
            >
              Sign In
            </Button>
          </Link>
        )}
      </Stack>
    </Flex>
  );
};

export { Header };
