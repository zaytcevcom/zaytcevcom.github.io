import React, { FC } from 'react';
import s from './modal.module.sass';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.wrapper}></div>
      <div className={s.content}>
        <button className={s.close}>x</button>
        {children}
      </div>
    </div>
  );
};
