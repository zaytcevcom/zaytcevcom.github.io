import React, { FC } from 'react';
import './operation.css';

interface OperationProps {
  amount: number;
  category: string;
  name: string;
  description: string;
}

export const Operation: FC<OperationProps> = (props: OperationProps) => {
  return (
    <div className={'operation'}>
      <div className={'main'}>
        <div className={'title'}>{props.name}</div>
        <div className={'description'}>{props.description}</div>
      </div>
      <div className={'price'}>
        <div className={'amount'}>
          <b>{props.amount}</b> руб.
        </div>
        <div className={'category'}>{props.category}</div>
      </div>
    </div>
  );
};
