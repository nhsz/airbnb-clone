import { Badge, Box, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { HiOutlineHeart, HiStar } from 'react-icons/hi';
import { formatListingPrice } from '../../utils';

interface Props {
  id: string;
  listing: {
    title: string;
    image: string;
    address: string;
    city: string;
    type: string;
    price: number;
    // numberOfGuests: number;
    // numberOfBeds: number;
    // numberOfBaths: number;
    rating: number;
  };
  checkIn: string;
  checkOut: string;
}

const BookingCard: FC<Props> = ({ id, listing }) => {
  const [fillColor, setFillColor] = useState('gray.600');

  return (
    <Box
      p='3'
      maxW='320px'
      border='1px'
      borderColor='gray.100'
      borderRadius='sm'
      d='flex'
      flexDirection='column'
      justifyContent='space-between'
      _hover={{
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <Stack>
        <Box pos='relative'>
          <Image
            borderRadius='md'
            src={listing.image}
            h={48}
            w='100%'
            border='1px'
            borderColor='gray.100'
          />
          <Icon
            as={HiOutlineHeart}
            pos='absolute'
            top={1}
            right={{ base: 2, md: 3, xl: 2 }}
            color='gray.300'
            fill={fillColor}
            fontSize='2xl'
            cursor='pointer'
            onClick={() => setFillColor('red.400')}
          />
        </Box>

        <Flex align='baseline' mt={2} mb={4}>
          <Badge colorScheme={listing.type.toUpperCase() === 'APARTMENT' ? 'pink' : 'green'} mr={2}>
            {listing.type}
          </Badge>
          <Text textTransform='uppercase' fontSize='sm' fontWeight='bold' color='gray.500'>
            {listing.city}
          </Text>
        </Flex>

        <Text lineHeight='short'>{listing.title}</Text>
        <Text mt={1} fontSize='sm' lineHeight='short' color='gray.500'>
          {listing.address}
        </Text>
      </Stack>

      <Stack mt={6}>
        <Flex justify='space-between'>
          <Flex align='center'>
            <Icon as={HiStar} color='red.500' />
            <Text ml={1} fontSize='xs'>
              <b>{listing.rating}</b>
            </Text>
          </Flex>

          <Flex align='center'>
            <Text>
              <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                {`$${formatListingPrice(listing.price)}`}
              </span>
            </Text>
            <Text fontSize='2xl' fontWeight='hairline' color='gray.400'>
              /
            </Text>
            <Text mt={1} fontWeight='light' color='gray.400'>
              night
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export { BookingCard };
