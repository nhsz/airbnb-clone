import { Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { User as UserData } from '../../api/graphql/queries';
import { BookingCard } from '../../components';

interface Props {
  userBookings: UserData['user']['bookings'];
  bookingsPage: number;
  setBookingsPage: (page: number) => void;
  limit: number;
}

const UserBookings: FC<Props> = ({ userBookings, bookingsPage, setBookingsPage, limit }) => {
  const total = userBookings ? userBookings.total : null;
  const results = userBookings ? userBookings.results : null;

  return (
    <Stack w={{ base: 'auto', md: '7xl' }} mx='auto'>
      <Stack mb={10}>
        <Heading as='h2' size='md' mb={1} color='gray.700'>
          Bookings
        </Heading>

        <Text color='gray.600'>This section highlights the bookings this user has made.</Text>
      </Stack>

      <Stack maxW='7xl' mx='auto' mb={12}>
        <Stack>
          {!results?.length ? (
            <Text color='gray.400'>
              <em>User hasn't made any booking yet.</em>
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
                return <BookingCard key={props.id} {...props} />;
              })}
            </Grid>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { UserBookings };
