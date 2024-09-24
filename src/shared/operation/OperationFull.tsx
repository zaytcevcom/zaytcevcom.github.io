import React, { FC } from 'react';
import './operation.css';

interface OperationFullProps {
  amount: number;
  category: string;
  name: string;
  description: string;
  createdAt: string;
}

export const OperationFull: FC<OperationFullProps> = (props: OperationFullProps) => {
  return (
    <div className={'operation'}>
      <div className={'main'}>
        <div className={'title'}>
          {props.createdAt} — {props.name}
        </div>
        <div className={'description'}>{props.description}</div>
      </div>
      <div className={'price'}>
        <div className={'amount'}>
          <b>{props.amount}</b> руб.
        </div>
        <div className={'category'}>{props.category}</div>
      </div>
      <div>ред.</div>
    </div>
  );
};
