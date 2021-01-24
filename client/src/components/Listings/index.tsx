import { useMutation, useQuery } from '@apollo/client';
import { Box, Button, Flex, Heading, HStack, Spacer, StackDivider, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { ListingDescription, ListingImage, LoadingSkeleton, LoadingSpinner } from '../ui';
import { ErrorAlert } from '../ui/ErrorAlert';
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

  if (error) return <ErrorAlert message='Something went wrong. Please try again later.' />;

  const listingsRender = (
    <>
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
        {listings &&
          listings.map(({ id, title, address, image }) => (
            <Flex key={id} flexWrap='wrap'>
              <HStack>
                <ListingImage alt={title} src={image} />
                <ListingDescription title={title} address={address} />
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
    </>
  );

  return (
    <Box bg='gray.50' p={8}>
      <Heading mb={12}>{title}</Heading>
      {loading && <LoadingSkeleton />}
      {deleteListingLoading ? <LoadingSpinner /> : listingsRender}
      {deleteListingError && (
        <ErrorAlert message='Oops, something went wrong while deleting listing.' />
      )}
    </Box>
  );
};

export { Listings };
