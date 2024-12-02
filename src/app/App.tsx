import React from 'react';
import { ThemeProvider } from 'src/app/theming';
import { Layout } from 'src/shared/Layout';
import { LocalizationInitiator } from 'src/app/localization/LocalizationInitiator';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { LoadMoreButton } from 'src/shared/LoadMoreButton';
import { useInView } from 'react-intersection-observer';
import { ProductList } from 'src/widgets/ProductList';
import { ModalWithInput } from 'src/widgets/Modal';

function App() {
  const [products, setProducts] = React.useState<Product[]>(getProducts());
  const { ref } = useInView({
    onChange: () => setProducts([...products, ...getProducts()]),
  });

  return (
    <>
      <LocalizationInitiator />
      <ThemeProvider>
        <Layout>
          <ModalWithInput />
          <ProductList products={products} />
          <div ref={ref}>
            <LoadMoreButton
              label={'Load more'}
              onClick={() => {
                setProducts([...products, ...getProducts()]);
              }}
            />
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

function getProducts(): Product[] {
  let products: Product[] = [];

  for (let i = 0; i < 12; i++) {
    products = [...products, createRandomProduct('2024-11-31')];
  }

  return products;
}

export default App;
