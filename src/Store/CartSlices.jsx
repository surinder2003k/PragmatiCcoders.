import { createSlice } from "@reduxjs/toolkit";

const CartSlices=createSlice({
    name:'cart',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value==0 ? 0 : state.value-=1
        },
        incrementbyvalue:(state,action)=>{
            state.value+=Number(action.payload)
        },
        reset:(state)=>{
            state.value =0
        }
    }
})
export const{increment,decrement,incrementbyvalue,reset}=CartSlices.actions
export default CartSlices.reducer 