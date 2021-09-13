import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlicer = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
        return {
        ...state,
        cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
        ),
        };
    } else {
        return {
        ...state,
        cartItems: [...state.cartItems, item],
        };
    }
        },
        removeFromCart(state,action){
            return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    };
        }

    }
})

export const {addToCart,removeFromCart} = cartSlicer.actions;

export default cartSlicer.reducer;