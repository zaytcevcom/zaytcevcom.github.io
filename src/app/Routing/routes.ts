import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { ProfilePage } from 'src/pages/ProfilePage/ProfilePage';
import { CartPage } from 'src/pages/CartPage/CartPage';
import { LoginPage } from 'src/pages/LoginPage/LoginPage';
import { FC } from 'react';
import { ProfileState } from 'src/store/slices/authSlice';
import { ProductForm } from 'src/widgets/ProductForm';
import { SignupPage } from 'src/pages/SignupPage/SignupPage';
import { SignupPageToolkit } from 'src/pages/SignupPageToolkit/SignupPageToolkit';

type RouteType = {
  path: string;
  element: FC;
  title: string;
  isVisible: (user: ProfileState) => void;
  isModal: boolean;
};

const isGuest = (user: ProfileState) => !user;
const isUser = (user: ProfileState) => !!user;
const isAdmin = (user: ProfileState) => user && user.role === 'admin';

export const routes: RouteType[] = [
  {
    path: '/',
    element: ProductsPage,
    title: 'components.Header.products',
    isVisible: () => true,
    isModal: false,
  },
  {
    path: '/profile',
    element: ProfilePage,
    title: 'components.Header.profile',
    isVisible: isUser,
    isModal: false,
  },
  {
    path: '/cart',
    element: CartPage,
    title: 'components.Header.cart',
    isVisible: () => true,
    isModal: false,
  },
  {
    path: '/login',
    element: LoginPage,
    title: 'components.Header.login',
    isVisible: isGuest,
    isModal: false,
  },
  {
    path: '/signup',
    element: SignupPage,
    title: 'components.Header.signup',
    isVisible: isGuest,
    isModal: false,
  },
  {
    path: '/signup-toolkit',
    element: SignupPageToolkit,
    title: 'components.Header.signup_toolkit',
    isVisible: isGuest,
    isModal: false,
  },
  {
    path: '/product',
    element: ProductForm,
    title: 'components.Header.product_new',
    isVisible: isAdmin,
    isModal: true,
  },
];
