import { configureStore } from '@reduxjs/toolkit';
import productSlicer from './productsSlice'
import getProductDetails from './productDetailsSlice';
import cartReducer from './cart'

export const store = configureStore({
  reducer: {
   products: productSlicer,
   getProduct: getProductDetails
  },
});
