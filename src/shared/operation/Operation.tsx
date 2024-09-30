import React, { FC } from 'react';
import './operation.css';

interface OperationProps {
  amount: number;
  category: string;
  name: string;
  description: string;
}

export const Operation: FC<OperationProps> = ({ amount, category, name, description }) => {
  return (
    <div className={'operation'}>
      <div className={'main'}>
        <div className={'title'}>{name}</div>
        <div className={'description'}>{description}</div>
      </div>
      <div className={'price'}>
        <div className={'amount'}>
          <b>{amount}</b> руб.
        </div>
        <div className={'category'}>{category}</div>
      </div>
    </div>
  );
};
