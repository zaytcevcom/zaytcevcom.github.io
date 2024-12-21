import React, { FC } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'src/widgets/Modal';
import { routes } from 'src/app/Routing/routes';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';
import { useSelector } from 'react-redux';
import { selectProfile } from 'src/store/slices/authSlice';

export const Routing: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  const profile = useSelector(selectProfile);

  return (
    <>
      <Routes location={background || location}>
        {routes
          .filter((route) => !route.isModal && route.isVisible(profile))
          .map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        <Route path="*" element={<ProductsPage />} />
      </Routes>
      {background && (
        <Modal visible={true} onClose={() => navigate(-1)}>
          <Routes>
            {routes
              .filter((route) => route.isModal && route.isVisible(profile))
              .map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
          </Routes>
        </Modal>
      )}
    </>
  );
};
