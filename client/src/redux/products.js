import { createSlice } from "@reduxjs/toolkit";
import {getAllProducts} from '../service/product-service'


const initialState = {
    products:getAllProducts()
}

const productSlicer = createSlice({
    name:"products",
    initialState,
    reducers:{
        showAllProducts(state,action){
            state.products = initialState;
        },
        addNewProduct(state,action){
            state.products.push(action.payload)
        },
        resetProducts(state,action){
            state.products = []
        }

    }
})

export const {addNewProduct,resetProducts,showAllProducts} = productSlicer.actions;

export default productSlicer.reducer;