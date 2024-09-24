import React, { FC } from 'react';
import './header.css';
import { Logo } from '../logo/Logo';

export const Header: FC = () => {
  return (
    <header>
      <Logo />
    </header>
  );
};
