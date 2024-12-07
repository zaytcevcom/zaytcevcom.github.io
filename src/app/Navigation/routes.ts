import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { ProfilePage } from 'src/pages/ProfilePage/ProfilePage';
import { CartPage } from 'src/pages/CartPage/CartPage';
import { LoginPage } from 'src/pages/LoginPage/LoginPage';
import { FC } from 'react';
import { ProfileState } from 'src/store/slices/authSlice';

type RouteType = {
  path: string;
  element: FC;
  title: string;
  isVisible: (user: ProfileState) => void;
};

export const routes: RouteType[] = [
  {
    path: '/',
    element: ProductsPage,
    title: 'components.Header.products',
    isVisible: () => true,
  },
  {
    path: '/profile',
    element: ProfilePage,
    title: 'components.Header.profile',
    isVisible: (user) => !!user,
  },
  {
    path: '/cart',
    element: CartPage,
    title: 'components.Header.cart',
    isVisible: () => true,
  },
  {
    path: '/login',
    element: LoginPage,
    title: 'components.Header.login',
    isVisible: (user) => !user,
  },
  {
    path: '/product',
    element: null,
    title: 'components.Header.product_new',
    isVisible: (user) => !!user && user.role === 'admin',
  },
];
