import React, { FC } from 'react';
import './product.css';
import { AddToCart } from '../addToCart/AddToCart';

interface ProductFullProps {
  photo?: string;
  category: string;
  name: string;
  description: string;
  price: number;
}

export const ProductFull: FC<ProductFullProps> = (props: ProductFullProps) => {
  return (
    <div className={'product-full'}>
      <div>
        <div className={'photo'}>
          <img src={props.photo} alt={props.name} />
        </div>
      </div>
      <div>
        <div className={'title'}>
          {props.name} ({props.category})
        </div>
        <div className={'description'}>{props.description}</div>
        <div className={'price'}>{props.price} руб.</div>
        <AddToCart count={0} disabled={true} />
      </div>
    </div>
  );
};
