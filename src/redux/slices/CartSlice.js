import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name:"cart",
   initialState:{
    allProducts : [],
    totalPrice : 0,
   },
   reducers:{
    addProduct:(state, action)=>{
        console.log(action.payload);
        state.allProducts.push(action.payload)
        state.totalPrice = state.totalPrice + action.payload.salePrice ;
        console.log(state.totalPrice);
         
    },
    clearCart :(state)=>{
        state.allProducts=[];
        state.totalPrice = 0;
    }
   }
})

export const{addProduct, clearCart}=CartSlice.actions;

export default CartSlice.reducer;