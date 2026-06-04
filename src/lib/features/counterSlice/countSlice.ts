import { createSlice } from "@reduxjs/toolkit";

const initializeValue = {
    value:0
}

export const countSlice = createSlice({
    name:'count',
    initialState:initializeValue,
    reducers:{
        increment : ()=>{
            
        },
        decrement : ()=>{

        },
        resetValue:()=>{

        }
    }
})
export const { increment, decrement, resetValue} = countSlice.actions

export default countSlice.reducer