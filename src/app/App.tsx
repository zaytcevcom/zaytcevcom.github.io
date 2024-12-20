import React, { useEffect } from 'react';
import { ThemeProvider } from 'src/app/theming';
import { Layout } from 'src/shared/Layout';
import { LocalizationInitiator } from 'src/app/localization/LocalizationInitiator';
import { Routing } from 'src/app/Routing';
import { useDispatch, useSelector } from 'react-redux';
import { init, selectIsInit } from 'src/store/slices/appSlice';

function App() {
  const dispatch = useDispatch();
  const isInit = useSelector(selectIsInit);

  useEffect(() => {
    if (!isInit) {
      dispatch(init());
    }
  }, [isInit, dispatch]);

  if (!isInit) {
    return <div>Loading...</div>; // Показываем спиннер/загрузку
  }

  return (
    <>
      <LocalizationInitiator />
      <ThemeProvider>
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
