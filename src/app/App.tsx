import React from 'react';
import { Product } from 'src/shared/product/Product';
import { ThemeProvider } from 'src/app/theming';
import { Layout } from 'src/shared/layout/Layout';
import { LocalizationInitiator } from 'src/app/localization/LocalizationInitiator';

function App() {
  return (
    <>
      <LocalizationInitiator />
      <ThemeProvider>
        <Layout>
          <Product
            photo={'https://img.mvideo.ru/Big/30064758bb.jpg'}
            name={'iPhone 14'}
            description={'Смартфон Apple iPhone 14 128GB nanoSim/eSim Midnight'}
            price={65999}
          />
          <Product
            photo={'https://img.mvideo.ru/Big/30067797bb.jpg'}
            name={'Samsung Galaxy Watch6'}
            description={'Смарт-часы Samsung Galaxy Watch6 Classic 43 mm Black (SM-R950)'}
            price={19999}
          />
          <Product
            photo={'https://img.mvideo.ru/Pdb/30075301b.jpg'}
            name={'ASUS X1504ZA-BQ1602'}
            description={'Ноутбук ASUS X1504ZA-BQ1602 Cool Silver'}
            price={44999}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
