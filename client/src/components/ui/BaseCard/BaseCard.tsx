import { Badge, Box, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { formatListingPrice } from '../../../utils';

interface Props {
  id: string;
  title: string;
  image: string;
  address: string;
  city: string;
  type: string;
  price: number;
  rating: number;
  checkIn?: string;
  checkOut?: string;
}

const BaseCard: FC<Props> = ({ ...props }) => {
  const { id, title, image, type, city, address, rating, price } = props;
  // const [fillColor, setFillColor] = useState('gray.600');

  return (
    <Link to={`/listing/${id}`}>
      <Box
        p='3'
        h='100%'
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
              borderRadius='xl'
              src={image}
              h={48}
              w='100%'
              border='1px'
              borderColor='gray.100'
            />
            {/* <Icon
              as={HiOutlineHeart}
              pos='absolute'
              top={1}
              right={{ base: 2, md: 3, xl: 2 }}
              color='gray.300'
              fill={fillColor}
              fontSize='2xl'
              cursor='pointer'
              zIndex={999}
              onClick={() => setFillColor(color => (color === 'red.400' ? 'gray.600' : 'red.400'))}
            /> */}
          </Box>

          <Flex align='baseline' mt={2} mb={4}>
            <Badge colorScheme={type.toUpperCase() === 'APARTMENT' ? 'pink' : 'green'} mr={2}>
              {type}
            </Badge>
            <Text textTransform='uppercase' fontSize='sm' fontWeight='bold' color='gray.500'>
              {city}
            </Text>
          </Flex>

          <Text lineHeight='short'>{title}</Text>
          <Text mt={1} fontSize='sm' lineHeight='short' color='gray.500'>
            {address}
          </Text>
        </Stack>

        <Stack mt={6}>
          <Flex justify='space-between'>
            <Flex align='center'>
              <Icon as={HiStar} color='red.500' />
              <Text ml={1} fontSize='xs'>
                <b>{rating}</b>
              </Text>
            </Flex>

            <Flex align='center'>
              <Text>
                <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {`$${formatListingPrice(price)}`}
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
    </Link>
  );
};

export { BaseCard };
