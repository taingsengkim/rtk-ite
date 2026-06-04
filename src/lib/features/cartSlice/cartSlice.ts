import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";


export interface CartItem {
   id: number,
   name: string,
   image: string,
   price: number,
   quantity:number
}

interface CartState{
    items:CartItem[],
    totalQuantity:number,
    totalAmount:number
}

const initalState:CartState={
    items:[],
    totalQuantity:0,
    totalAmount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState : initalState,
  reducers:{
     addToCart: (state,action:PayloadAction<CartItem>) => {
        const newItem = action.payload;
        const existingItem = state.items.find(item=>item.id==newItem.id)
        if(existingItem){
            existingItem.quantity+=1;
        }else{
            state.items.push({...newItem,quantity:1})
        }
        state.totalQuantity+=1;
        state.totalAmount+=newItem.price
    }, 
     removeFromCart: (state,action:PayloadAction<CartItem>) => {
         const existingItem = state.items.find(item=>item.id== action.payload.id)
        if(existingItem){
            existingItem.quantity-=1;
            state.totalQuantity-=1
            state.totalAmount-=existingItem.price
        }
       }
  }
})

export const {
  addToCart,
  removeFromCart
} = cartSlice.actions;
export default cartSlice.reducer;
