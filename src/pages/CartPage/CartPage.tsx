import React, { FC } from 'react';
import { ProductList } from 'src/widgets/ProductList';
import { Product } from 'src/homeworks/ts1/3_write';

export const CartPage: FC = () => {
  const initProducts: Product[] = [
    {
      id: '1',
      price: 120000,
      name: 'iPhone 15 Pro Max',
      desc: 'Apple iPhone 15 Pro Max',
      photo: 'https://img.mvideo.ru/Big/30064758bb.jpg',
      createdAt: '04.12.2024',
      oldPrice: 150000,
      category: null,
    },
  ];
  const [products] = React.useState<Product[]>(initProducts);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
