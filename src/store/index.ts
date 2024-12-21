import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'src/store/slices/appSlice';
import authReducer from 'src/store/slices/authSlice';
import cartReducer from 'src/store/slices/cartSlice';
import productsReducer from 'src/store/slices/productsSlice';
import { authApi } from 'src/store/api/authApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    app: appReducer,
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
