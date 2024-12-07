import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'src/store/slices/appSlice';
import authReducer from 'src/store/slices/authSlice';
import cartReducer from 'src/store/slices/cartSlice';
import productsReducer from 'src/store/slices/productsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
