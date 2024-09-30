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

export const ProductFull: FC<ProductFullProps> = ({ photo, name, category, description, price }) => {
  return (
    <div className={'product-full'}>
      <div>
        <div className={'photo'}>
          <img src={photo} alt={name} />
        </div>
      </div>
      <div>
        <div className={'title'}>
          {name} ({category})
        </div>
        <div className={'description'}>{description}</div>
        <div className={'price'}>{price} руб.</div>
        <AddToCart count={0} disabled={true} />
      </div>
    </div>
  );
};
