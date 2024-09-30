import React, { FC } from 'react';
import './operation.css';

interface OperationFullProps {
  amount: number;
  category: string;
  name: string;
  description: string;
  createdAt: string;
}

export const OperationFull: FC<OperationFullProps> = ({ amount, category, name, description, createdAt }) => {
  return (
    <div className={'operation'}>
      <div className={'main'}>
        <div className={'title'}>
          {createdAt} — {name}
        </div>
        <div className={'description'}>{description}</div>
      </div>
      <div className={'price'}>
        <div className={'amount'}>
          <b>{amount}</b> руб.
        </div>
        <div className={'category'}>{category}</div>
      </div>
      <div>ред.</div>
    </div>
  );
};
