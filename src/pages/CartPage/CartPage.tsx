import React, { FC } from 'react';
import { ProductList } from 'src/widgets/ProductList';
import { useSelector } from 'react-redux';
import { selectProducts } from 'src/store/slices/productsSlice';
import { selectCart } from 'src/store/slices/cartSlice';
import { useTranslation } from 'react-i18next';

export const CartPage: FC = () => {
  const { t } = useTranslation();
  const allProducts = useSelector(selectProducts);
  const cartItems = useSelector(selectCart);

  const products = cartItems.map((item) => {
    return allProducts.find((product) => product.id === item.id);
  });

  if (products.length === 0) {
    return <div>{t`pages.CartPage.emptyList`}</div>;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
