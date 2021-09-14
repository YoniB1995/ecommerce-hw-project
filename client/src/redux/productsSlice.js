import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return await fetch('http://localhost:5000/products').then((res)=> res.json())
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