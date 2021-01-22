import { useMutation, useQuery } from '@apollo/client';
import { FC } from 'react';
import { DELETE_LISTINGS, LISTINGS } from './queries';
import { DeleteListingData, DeleteListingVariables, ListingsData } from './types';

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
    <>
      <h2>{title}</h2>

      {listings && (
        <ul>
          {listings.map(({ id, title }) => (
            <li key={id}>
              {title} <button onClick={() => handleDeleteListing(id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {deleteListingLoading ? <h4>Deletion in progress...</h4> : null}
      {deleteListingError ? <h4>Oops, something went wrong while deleting listing.</h4> : null}
    </>
  );
};

export { Listings };
