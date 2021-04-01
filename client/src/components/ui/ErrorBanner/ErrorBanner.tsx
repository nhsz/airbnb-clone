import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const ErrorBanner: FC<Props> = ({ title, description }) => (
  <Alert status='error'>
    <AlertIcon />
    <AlertTitle mr={2}>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </Alert>
);

export { ErrorBanner };
