import React, { FC } from 'react';
import cn from 'clsx';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={'modal'}>
      <div className={'wrapper'}></div>
      <div className={'content'}>
        <button className={'close'}>x</button>
        {children}
      </div>
    </div>
  );
};
