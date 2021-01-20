import { FC } from 'react';
import { useQuery } from '../../hooks';
import { api } from '../../lib/api';
import { DeleteListingData, DeleteListingVariables, ListingsData } from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numberOfGuests
      numberOfBeds
      numberOfBaths
      rating
    }
  }
`;

const DELETE_LISTINGS = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      title
      image
      address
      price
      numberOfGuests
      numberOfBeds
      numberOfBaths
      rating
    }
  }
`;

interface Props {
  title: string;
}

const Listings: FC<Props> = ({ title }) => {
  const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);

  const deleteListing = async (id: string) => {
    await api.fetch<DeleteListingData, DeleteListingVariables>({
      query: DELETE_LISTINGS,
      variables: {
        id
      }
    });

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
    <>
      <h2>{title}</h2>

      {listings && (
        <ul>
          {listings.map(({ id, title }) => (
            <li key={id}>
              {title} <button onClick={() => deleteListing(id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { Listings };
