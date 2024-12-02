import React, { FC } from 'react';
import s from './Header.module.sass';
import { Logo } from '../Logo';
import { LangSwitcher } from 'src/features/LangSwitcher';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';

export const Header: FC = () => {
  return (
    <header className={s.root}>
      <Logo />
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
