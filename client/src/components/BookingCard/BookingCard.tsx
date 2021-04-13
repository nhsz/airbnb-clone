import { FC } from 'react';
import { BaseCard } from '../../components';

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

const BookingCard: FC<Props> = ({ id, checkIn, checkOut, ...props }) => {
  return <BaseCard id={id} {...props.listing} checkIn={checkIn} checkOut={checkOut} />;
};

export { BookingCard };
