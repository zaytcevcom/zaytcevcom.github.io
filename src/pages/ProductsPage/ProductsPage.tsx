import React, { FC } from 'react';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { useInView } from 'react-intersection-observer';
import { ProductList } from 'src/widgets/ProductList';
import { LoadMoreButton } from 'src/shared/LoadMoreButton';

export const ProductsPage: FC = () => {
  const [products, setProducts] = React.useState<Product[]>(getProducts());
  const { ref } = useInView({
    onChange: () => setProducts([...products, ...getProducts()]),
  });

  return (
    <>
      <ProductList products={products} />
      <div ref={ref}>
        <LoadMoreButton
          label={'Load more'}
          onClick={() => {
            setProducts([...products, ...getProducts()]);
          }}
        />
      </div>
    </>
  );
};

function getProducts(): Product[] {
  let products: Product[] = [];

  for (let i = 0; i < 12; i++) {
    products = [...products, createRandomProduct('2024-11-31')];
  }

  return products;
}
