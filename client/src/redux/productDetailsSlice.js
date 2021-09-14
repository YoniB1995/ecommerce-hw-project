import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";


export const getProductDetails =  createAsyncThunk('product/getProductDetails', async ({dispatch,getState}) => {
    return fetch(`http://localhost:5000/products/613f349d0886562e4a4d6318`).then((res)=> res.json())
});

const initialState = {
    product:{},
    status: null,
}

const productDetailsSlicer = createSlice({
    name:"product",
    initialState,
    extraReducers:{
        [getProductDetails.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProductDetails.fulfilled] : (state, {payload}) => {
            state.product = payload
            state.status = 'success'
        },
        [getProductDetails.rejected] : (state, action) => {
            state.status = 'failed'
        },

    },
})


export default productDetailsSlicer.reducer;