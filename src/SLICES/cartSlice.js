import '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((_, index) => index !== action.payload);
          },
    }
})

export const { addToCart ,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;