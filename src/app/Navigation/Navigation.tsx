import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ProductForm } from 'src/widgets/ProductForm';
import { Modal } from 'src/widgets/Modal';
import { routes } from 'src/app/Navigation/routes';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { selectProfile } from 'src/store/slices/authSlice';
import { useSelector } from 'react-redux';

export const Navigation: FC = () => {
  const location = useLocation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const profile = useSelector(selectProfile);

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
        {routes
          .filter((route) => route.element && route.isVisible(profile))
          .map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
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
