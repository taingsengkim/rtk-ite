import { createSlice } from "@reduxjs/toolkit";

export const initializeValue = {
    value:0
}

export const countSlice = createSlice({
    name:'count',   
    initialState:initializeValue,
    reducers:{
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -=1
        },
        resetValue:(state)=>{
            state.value = 0
        }
    }
})
export const { increment, decrement, resetValue} = countSlice.actions

export default countSlice.reducer