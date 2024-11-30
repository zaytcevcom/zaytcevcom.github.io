import React, { FC } from 'react';
import s from './operation.module.sass';

interface OperationFullProps {
  amount: number;
  category: string;
  name: string;
  description: string;
  createdAt: string;
}

export const OperationFull: FC<OperationFullProps> = ({ amount, category, name, description, createdAt }) => {
  return (
    <div className={s.operation}>
      <div className={s.main}>
        <div className={s.title}>
          {createdAt} — {name}
        </div>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.price}>
        <div className={s.amount}>
          <b>{amount}</b> руб.
        </div>
        <div className={s.category}>{category}</div>
      </div>
      <div>ред.</div>
    </div>
  );
};
