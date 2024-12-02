import React, { FC } from 'react';
import s from './Product.module.sass';
import { AddToCart } from 'src/features/AddToCart';

interface ProductProps {
  photo?: string;
  name: string;
  description: string;
  price: number;
}

export const Product: FC<ProductProps> = ({ photo, name, description, price }) => {
  return (
    <div className={s.product}>
      <div className={s.photo}>
        <img src={photo} alt={name} />
      </div>
      <div className={s.title}>{name}</div>
      <div className={s.description}>{description}</div>
      <div className={s.price}>{price} руб.</div>
      <AddToCart count={0} disabled={true} />
    </div>
  );
};
