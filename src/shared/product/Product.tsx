import React, { FC } from 'react';
import './product.css';
import { AddToCart } from '../addToCart/AddToCart';

interface ProductProps {
  photo?: string;
  name: string;
  description: string;
  price: number;
}

export const Product: FC<ProductProps> = (props: ProductProps) => {
  return (
    <div className={'product'}>
      <div className={'photo'}>
        <img src={props.photo} alt={props.name} />
      </div>
      <div className={'title'}>{props.name}</div>
      <div className={'description'}>{props.description}</div>
      <div className={'price'}>{props.price} руб.</div>
      <AddToCart count={0} disabled={true} />
    </div>
  );
};
