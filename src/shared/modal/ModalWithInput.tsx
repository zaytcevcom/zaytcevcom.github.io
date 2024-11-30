import React, { FC, useState } from 'react';
import s from './modal.module.sass';
import { Modal } from './Modal';

export const ModalWithInput: FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div>
      <div className={s.test_container}>
        <Modal visible={visible}>{value}</Modal>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => setVisible(!visible)}>Open modal</button>
      </div>
    </div>
  );
};
