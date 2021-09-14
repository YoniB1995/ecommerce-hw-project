import { configureStore } from '@reduxjs/toolkit';
import productSlicer from './productsSlice'
import getProductDetails from './productDetailsSlice';
import cartReducer from './cartSlicer'

export const store = configureStore({
  reducer: {
   products: productSlicer,
   product: getProductDetails,
   cart: cartReducer
  },
});
