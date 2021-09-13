import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products'
import cartReducer from './cart'

export const store = configureStore({
  reducer: {
   cart: cartReducer,
   product: productReducer
  },
});
