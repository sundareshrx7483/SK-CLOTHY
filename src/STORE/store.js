import "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../SLICES/cartSlice"


const store = configureStore({
    reducer: {
        cartInfo: cartReducer,
     
    }
})

export default store