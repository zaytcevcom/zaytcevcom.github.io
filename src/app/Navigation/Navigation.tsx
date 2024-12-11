import React, { FC } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { ProfilePage } from 'src/pages/ProfilePage/ProfilePage';
import { CartPage } from 'src/pages/CartPage/CartPage';
import { LoginPage } from 'src/pages/LoginPage/LoginPage';
import { ProductForm } from 'src/widgets/ProductForm';
import { Modal } from 'src/widgets/Modal';

export const Navigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ProductsPage />} />
      </Routes>
      {background && (
        <Modal visible={true} onClose={() => navigate(-1)}>
          <Routes>
            <Route path="/product" element={<ProductForm />} />
          </Routes>
        </Modal>
      )}
    </>
  );
};
