import React, { FC } from 'react';
import s from './product.module.sass';
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
    <div className={s.product_full}>
      <div>
        <div className={s.photo}>
          <img src={photo} alt={name} />
        </div>
      </div>
      <div>
        <div className={s.title}>
          {name} ({category})
        </div>
        <div className={s.description}>{description}</div>
        <div className={s.price}>{price} руб.</div>
        <AddToCart count={0} disabled={true} />
      </div>
    </div>
  );
};
