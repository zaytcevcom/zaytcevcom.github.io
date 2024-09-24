import React, { FC } from 'react';
import './addToCart.css';

interface AddToCartProps {
  count: number;
  disabled: boolean;
}

export const AddToCart: FC<AddToCartProps> = ({ count, disabled }) => {
  if (count === 0) {
    return <button disabled={disabled}>В корзину</button>;
  }

  return (
    <div>
      <button className={'decrease'} disabled={disabled}>
        -
      </button>
      {count} шт.
      <button className={'increase'} disabled={disabled}>
        +
      </button>
    </div>
  );
};
