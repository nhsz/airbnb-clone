import { useMutation } from '@apollo/client';
import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { FC } from 'react';
import { HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import { LogOut as LogOutData, LOG_OUT } from '../../api/graphql/mutations';
import { LogIn_logIn as Viewer } from '../../api/types';
import { displayErrorNotification, displaySuccessNotification } from '../../utils';

interface Props {
  id: string;
  avatar: string | null;
  setViewer: (viewer: Viewer) => void;
}

const UserMenu: FC<Props> = ({ id, avatar, setViewer }) => {
  const toast = useToast();
  const history = useHistory();
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: data => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        sessionStorage.removeItem('token');
        displaySuccessNotification({ toast, title: "You've successfully logged out!" });
        history.push('/');
      }
    },
    onError: () =>
      displayErrorNotification({
        toast,
        title: 'Oops! An error occurred while trying to log you out.'
      })
  });
  const handleLogOut = () => logOut();

  return (
    <Menu>
      <MenuButton as={Button} variant='ghost' w={7} borderRadius='full'>
        <Avatar size='sm' src={avatar ? avatar : '#'} />
      </MenuButton>
      <MenuList>
        <Link to={`/user/${id}`}>
          <MenuItem icon={<HiOutlineUser />}>Profile</MenuItem>
        </Link>
        <MenuItem icon={<HiOutlineLogout />} onClick={handleLogOut}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export { UserMenu };
