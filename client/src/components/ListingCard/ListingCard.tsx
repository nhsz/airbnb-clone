import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { HiStar } from 'react-icons/hi';

interface Props {
  listing: {
    id: string;
    title: string;
    image: string;
    address: string;
    city: string;
    price: number;
    numberOfGuests: number;
    numberOfBeds: number;
    numberOfBaths: number;
    rating: number;
  };
}

const ListingCard: FC<Props> = ({ listing }) => {
  const { title, image, address, city, price, rating } = listing;

  return (
    <Box p='5' maxW='320px' borderWidth='1px'>
      <Image borderRadius='md' src={image} />
      <Flex align='baseline' mt={2}>
        <Text ml={2} textTransform='uppercase' fontSize='sm' fontWeight='bold' color='pink.800'>
          {city}
        </Text>
      </Flex>
      <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
        {title}
      </Text>
      <Text mt={1} fontSize='sm' lineHeight='short'>
        {address}
      </Text>
      <Text mt={2}>${price}/night</Text>
      <Flex mt={2} align='center'>
        <Icon as={HiStar} color='orange.400' />
        <Text ml={1} fontSize='sm'>
          <b>{rating}</b>
        </Text>
      </Flex>
    </Box>
  );
};

export { ListingCard };
