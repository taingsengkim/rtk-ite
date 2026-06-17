import { CreateProductType, MainProductType, ProductType } from "@/lib/products";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath:"ecommerceApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://ishop.cheat.casa/api/v1"}),
    endpoints:(builder)=>(
        {
            getAllProduct:builder.query<MainProductType,void>({
                query:()=> `/products`,
            }),
            createProduct : builder.mutation<CreateProductType,unknown,unknown>({
                query:(newProduct:CreateProductType) => ({
                    url:"/products",
                    method:"POST",
                    headers:{
                        'content-type':'application/json',
                        'authentication':`bearer ${process.env.ACCESS_TOEKN}`
                    }
                })
            })
        }
    )
})
export const {
    useGetAllProductQuery,
    useCreateProductMutation
} = ecommerceApi;