import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type FakeStoreCategoryType = { 
    id:number,
    name:string,
    slug:string
}

export type FakeStoreProductType  ={
    id:number,
    price : number,
    title : string,
    slug : string,
    category:FakeStoreCategoryType,
    images:string[],
}

export const productApi = createApi({ 
    reducerPath:'productApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${process.env.NEXT_PUBLIC_BASE_FAKESTORE_API_URL}`
    }),
    endpoints:(build)=>({
        getAllFakeStoreProduct:build.query<FakeStoreProductType[],void>({
            query:()=> `/products` 
        }),
        getFakeStoreProduct:build.query<FakeStoreProductType,string>({
            query:(string)=> `/products/${string}` 
        })
    }),
    

})

export const { useGetAllFakeStoreProductQuery,useGetFakeStoreProductQuery } = productApi