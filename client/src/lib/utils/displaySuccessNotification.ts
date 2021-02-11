import type { UseToastOptions } from '@chakra-ui/react';

type ToastFn = (options?: UseToastOptions | undefined) => string | number | undefined;

interface Params {
  toast: ToastFn;
  title: string;
  description?: string;
}

const displaySuccessNotification = ({ toast, title, description }: Params) => {
  toast({
    position: 'top-right',
    title,
    description,
    status: 'success',
    duration: 4000,
    isClosable: true
  });
};

export { displaySuccessNotification };
