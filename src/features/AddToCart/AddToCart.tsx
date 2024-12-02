import React, { FC } from 'react';
import s from './AddToCart.module.sass';
import { useTranslation } from 'react-i18next';

interface AddToCartProps {
  count: number;
  disabled: boolean;
}

export const AddToCart: FC<AddToCartProps> = ({ count, disabled }) => {
  const { t } = useTranslation();

  if (count === 0) {
    return <button className={s.button} disabled={disabled}>{t`components.AddToCart.text`}</button>;
  }

  return (
    <div>
      <button className={s.button} disabled={disabled}>
        -
      </button>
      {count} шт.
      <button className={s.button} disabled={disabled}>
        +
      </button>
    </div>
  );
};
