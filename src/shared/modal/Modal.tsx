import React, { FC } from 'react';
import cn from 'clsx';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  const status = visible ? 'visible' : '';

  return (
    <div className={cn('modal', status)}>
      <div className={'wrapper'}></div>
      <div className={'content'}>
        <button className={'close'}>x</button>
        {children}
      </div>
    </div>
  );
};
