import { configureStore } from '@reduxjs/toolkit';
import { countSlice } from './features/counterSlice/countSlice';
import { cartSlice } from './features/cartSlice/cartSlice';
import { ecommerceApi } from '@/services/ecommerce';
import { productApi } from './features/productSlice/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      count: countSlice.reducer,
      cart:cartSlice.reducer,
      [ecommerceApi.reducerPath]:ecommerceApi.reducer,
      [productApi.reducerPath]:productApi.reducer
    },
    middleware:(getDefaultMiddleWare)=>{
      return getDefaultMiddleWare().concat(ecommerceApi.middleware)
          .concat(productApi.middleware)
    }
  })
} 

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']  