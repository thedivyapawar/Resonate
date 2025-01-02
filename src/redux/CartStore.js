import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from './slices/CartSlice'

const myStore = configureStore({
    reducer:{
        cart:CartSliceReducer,
    }
})

export default myStore