import { Alert, AlertIcon } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  message: string;
}

const ErrorAlert: FC<Props> = ({ message }) => (
  <Alert status='error'>
    <AlertIcon />
    {message}
  </Alert>
);

export { ErrorAlert };
