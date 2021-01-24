import { Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  alt: string;
  src: string;
}

const ListingImage: FC<Props> = ({ alt, src }) => (
  <Image
    borderRadius='sm'
    boxSize={{ base: '100px', sm: '128px' }}
    objectFit='cover'
    alt={alt}
    src={src}
    mr={4}
  />
);

export { ListingImage };
