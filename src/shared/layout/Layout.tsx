import React, { FC } from 'react';
import { Header } from 'src/shared/header/Header';
import s from './layout.module.sass';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      {children}
    </div>
  );
};
