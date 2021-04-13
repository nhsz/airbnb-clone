import { Center, Grid, Heading, Stack, Text } from '@chakra-ui/react';
// import { Container, Next, PageGroup, Paginator, Previous } from 'chakra-paginator';
import { FC } from 'react';
// import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { User as UserData } from '../../api/graphql/queries';
import { ListingCard } from '../../components';

interface Props {
  userListings: UserData['user']['listings'];
  listingsPage: number;
  setListingsPage: (page: number) => void;
  limit: number;
}

const UserListings: FC<Props> = ({ userListings, listingsPage, setListingsPage, limit }) => {
  const { total, results } = userListings;

  return (
    <Center>
      <Stack w={{ base: 'auto', md: '7xl' }}>
        <Stack mb={10}>
          <Heading as='h2' size='md' mb={1} color='gray.700'>
            Listings
          </Heading>

          <Text color='gray.600'>
            This section highlights the listings this user currently hosts and has made available
            for bookings.
          </Text>
        </Stack>

        <Center>
          <Stack maxW='7xl' mb={12}>
            <Stack>
              {!results.length ? (
                <Text color='gray.400'>
                  <em>User doesn't have any listing yet.</em>
                </Text>
              ) : (
                <Grid
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(4, 1fr)'
                  }}
                  gap={{ base: 4, sm: 1, md: 3 }}
                >
                  {results.map(props => {
                    return <ListingCard key={props.id} {...props} />;
                  })}
                </Grid>
              )}
            </Stack>

            {/* <Stack>
        <Paginator pagesQuantity={4} onPageChange={() => {}}>
          <Container align='center' justify='center' w='full' p={4}>
            <Previous bg='green.300'>
              <HiOutlineChevronLeft />
            </Previous>
            <PageGroup isInline align='center' spacing={12} p={4} />
            <Next bg='green.300'>
              <HiOutlineChevronRight />
            </Next>
          </Container>
        </Paginator>
      </Stack>
      */}
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
};

export { UserListings };
