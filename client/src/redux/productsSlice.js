import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {API} from '../service/api.service'
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return await fetch(API).then((res)=> res.json())
});

const initialState = {
    products:[],
    status: null,
}

const productSlicer = createSlice({
    name:"products",
    initialState,
    extraReducers:{
        [getProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled] : (state, {payload}) => {
            state.products = payload
            state.status = 'success'
        },
        [getProducts.rejected] : (state, action) => {
            state.status = 'failed'
        },

    },
})


export default productSlicer.reducer;