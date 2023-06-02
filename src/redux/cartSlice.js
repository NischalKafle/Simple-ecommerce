import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        deleteItem:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addItem,deleteItem}=cartSlice.actions
export default cartSlice.reducer