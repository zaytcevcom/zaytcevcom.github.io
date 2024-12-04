import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { ProfilePage } from 'src/pages/ProfilePage/ProfilePage';
import { CartPage } from 'src/pages/CartPage/CartPage';
import { LoginPage } from 'src/pages/LoginPage/LoginPage';
import { ProductForm } from 'src/widgets/ProductForm';
import { Modal } from 'src/widgets/Modal';

export const Navigation: FC = () => {
  const location = useLocation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  useEffect(() => {
    if (location.pathname === '/product') {
      setModalContent(<ProductForm />);
      setModalVisible(true);
    } else {
      setModalContent(null);
      setModalVisible(false);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ProductsPage />} />
      </Routes>
      {isModalVisible && (
        <Modal visible={isModalVisible} onClose={() => setModalVisible(false)}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};
