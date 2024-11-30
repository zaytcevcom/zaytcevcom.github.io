import React, { FC } from 'react';
import s from './modal.module.sass';
import { createPortal } from 'react-dom';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, onClose, children }) => {
  if (!visible) {
    return null;
  }

  return createPortal(
    <div className={s.modal}>
      <div className={s.wrapper} onClick={onClose}></div>
      <div className={s.content}>
        <button className={s.close} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
