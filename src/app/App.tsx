import React from 'react';
import { ThemeProvider } from 'src/app/theming';
import { Layout } from 'src/shared/Layout';
import { LocalizationInitiator } from 'src/app/localization/LocalizationInitiator';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from 'src/app/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <LocalizationInitiator />
        <ThemeProvider>
          <Layout>
            <Navigation />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
