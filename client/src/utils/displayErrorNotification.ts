import type { UseToastOptions } from '@chakra-ui/react';

type ToastFn = (options?: UseToastOptions | undefined) => string | number | undefined;

interface Params {
  toast: ToastFn;
  title: string;
  description?: string;
}

const displayErrorNotification = ({ toast, title, description }: Params) => {
  toast({
    title,
    description,
    status: 'error',
    duration: 4000,
    isClosable: true
  });
};

export { displayErrorNotification };
