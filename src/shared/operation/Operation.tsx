import React, { FC } from 'react';
import s from './operation.module.sass';

interface OperationProps {
  amount: number;
  category: string;
  name: string;
  description: string;
}

export const Operation: FC<OperationProps> = ({ amount, category, name, description }) => {
  return (
    <div className={s.operation}>
      <div className={s.main}>
        <div className={s.title}>{name}</div>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.price}>
        <div className={s.amount}>
          <b>{amount}</b> руб.
        </div>
        <div className={s.category}>{category}</div>
      </div>
    </div>
  );
};
