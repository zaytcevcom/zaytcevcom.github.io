import React, { FC } from 'react';
import s from './Product.module.sass';
import { AddToCart } from 'src/features/AddToCart';
import { useSelector } from 'react-redux';
import { selectCart } from 'src/store/slices/cartSlice';

interface ProductProps {
  id: string;
  photo?: string;
  name: string;
  description: string;
  price: number;
}

export const Product: FC<ProductProps> = ({ id, photo, name, description, price }) => {
  const cartItems = useSelector(selectCart);
  const item = cartItems.find((item) => item.id === id);

  return (
    <div className={s.product}>
      <div className={s.photo}>
        <img src={photo} alt={name} />
      </div>
      <div className={s.title}>{name}</div>
      <div className={s.description}>{description}</div>
      <div className={s.price}>{price} руб.</div>
      <AddToCart id={id} count={item?.quantity ?? 0} disabled={false} />
    </div>
  );
};
