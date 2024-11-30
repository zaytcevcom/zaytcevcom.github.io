import React, { FC } from 'react';
import s from './header.module.sass';
import { Logo } from '../logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
