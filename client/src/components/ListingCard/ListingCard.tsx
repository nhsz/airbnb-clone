import { FC } from 'react';
import { BaseCard } from '../../components';

interface Props {
  id: string;
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
}

const ListingCard: FC<Props> = ({ ...props }) => {
  return <BaseCard {...props} />;
};

export { ListingCard };
