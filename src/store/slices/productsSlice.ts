import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { RootState } from 'src/store';

let initialState: Product[] = [];

for (let i = 0; i < 20; i++) {
  initialState = [...initialState, createRandomProduct('2024-12-04')];
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.unshift(action.payload);
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((product) => product.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.filter((product) => product.id !== action.payload.id);
    },
    loadMore: (state) => {
      for (let i = 0; i < 20; i++) {
        state.push(createRandomProduct('2024-12-04'));
      }
    },
  },
});

export const { addProduct, editProduct, removeProduct, loadMore } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
