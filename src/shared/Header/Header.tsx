import React, { FC } from 'react';
import { Logo } from '../Logo';
import { LangSwitcher } from 'src/features/LangSwitcher';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import s from './Header.module.sass';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';

const isActive: NavLinkProps['className'] = ({ isActive }) => cn(s.link, isActive && s.active);

export const Header: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <header className={s.root}>
      <Logo />
      <div className={s.menu}>
        <NavLink to="/" className={isActive}>
          {t`components.Header.products`}
        </NavLink>
        <NavLink to="/profile" className={isActive}>
          {t`components.Header.profile`}
        </NavLink>
        <NavLink to="/cart" className={isActive}>
          {t`components.Header.cart`}
        </NavLink>
        <NavLink to="/product" className={isActive} state={{ background: location }}>
          {t`components.Header.product_new`}
        </NavLink>
      </div>
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
