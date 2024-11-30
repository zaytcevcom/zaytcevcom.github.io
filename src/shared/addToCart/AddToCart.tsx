import React, { FC } from 'react';
import './addToCart.css';
import { useTranslation } from 'react-i18next';

interface AddToCartProps {
  count: number;
  disabled: boolean;
}

export const AddToCart: FC<AddToCartProps> = ({ count, disabled }) => {
  const { t } = useTranslation();

  if (count === 0) {
    return <button disabled={disabled}>{t`components.AddToCart.text`}</button>;
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
