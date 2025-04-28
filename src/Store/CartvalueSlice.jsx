import { createSlice } from "@reduxjs/toolkit";

const CartvalueSlices=createSlice({
    name:'cartval',
    initialState:{
        value:[]
    },
    reducers:{
        addcartitem:(state,action)=>{
            state.value=action.payload
        },
        removecartitem:(state,action)=>{
            state.value=state.value.filter((ele,indx)=>indx !== action.payload)
        },
        clearcart:(state,action)=>{
            state.value=[]
        }
    }
})
export const{clearcart,addcartitem,removecartitem}=CartvalueSlices.actions
export default CartvalueSlices.reducer 