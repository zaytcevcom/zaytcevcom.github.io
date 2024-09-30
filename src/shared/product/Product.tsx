import React, { FC } from 'react';
import './product.css';
import { AddToCart } from '../addToCart/AddToCart';

interface ProductProps {
  photo?: string;
  name: string;
  description: string;
  price: number;
}

export const Product: FC<ProductProps> = ({ photo, name, description, price }) => {
  return (
    <div className={'product'}>
      <div className={'photo'}>
        <img src={photo} alt={name} />
      </div>
      <div className={'title'}>{name}</div>
      <div className={'description'}>{description}</div>
      <div className={'price'}>{price} руб.</div>
      <AddToCart count={0} disabled={true} />
    </div>
  );
};
