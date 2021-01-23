import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import { FC } from 'react';
import { DELETE_LISTINGS, LISTINGS } from './queries';
import {
  DeleteListing as DeleteListingData,
  DeleteListingVariables
} from './__generated__/DeleteListing';
import { Listings as ListingsData } from './__generated__/Listings';

interface Props {
  title: string;
}

const Listings: FC<Props> = ({ title }) => {
  const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);
  const [deleteListing, { loading: deleteListingLoading, error: deleteListingError }] = useMutation<
    DeleteListingData,
    DeleteListingVariables
  >(DELETE_LISTINGS);

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ variables: { id } });

    refetch();
  };

  const listings = data ? data.listings : null;

  if (error) {
    return <h2>Something went wrong. Please try again later.</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Box bg='gray.50' p={8}>
      <Heading mb={8}>{title}</Heading>

      {/* {listings && (
        <UnorderedList>
          {listings.map(({ id, title }) => (
            <ListItem key={id}>
              {title} <button onClick={() => handleDeleteListing(id)}>Delete</button>
            </ListItem>
          ))}
        </UnorderedList>
      )} */}

      {/* listings {
      id
      title
      image
      address
      price
      numberOfGuests
      numberOfBeds
      numberOfBaths
      rating
    } */}

      {/* square
    48px */}

      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
        {listings &&
          listings.map(({ id, title, address, image }) => (
            <Flex key={id} flexWrap='wrap'>
              <HStack>
                <Image
                  borderRadius='sm'
                  boxSize={{ base: '100px', sm: '128px' }}
                  objectFit='cover'
                  alt={title}
                  src={image}
                  mr={4}
                />
                <Stack>
                  <Text color='gray.700' fontWeight={600}>
                    {title}
                  </Text>
                  <Text color='gray.600' fontWeight={300}>
                    {address}
                  </Text>
                </Stack>
              </HStack>
              <Spacer />
              <HStack mt={{ base: 4, sm: 0 }}>
                <Button colorScheme='blue' onClick={() => handleDeleteListing(id)}>
                  Delete
                </Button>
              </HStack>
            </Flex>
          ))}
      </VStack>

      {deleteListingLoading ? <h4>Deletion in progress...</h4> : null}
      {deleteListingError ? <h4>Oops, something went wrong while deleting listing.</h4> : null}
    </Box>
  );
};

export { Listings };
