import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import cartReducer from './CartSlices.jsx'
import cartvalReducer from './CartvalueSlice.jsx'
const cartstore=configureStore({
    reducer:{
        cart : cartReducer,
        cartval : cartvalReducer,
    }
})
export default cartstore   