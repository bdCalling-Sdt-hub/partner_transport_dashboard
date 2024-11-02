import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : '',
    prepareHeaders  :  (headers)=>{
        const token = JSON.parse();
        if(token){
            headers.set('Authorization' , `Bearer ${token}`)
        }
        return headers
    }
})

export const baseApi = createApi({
    reducerPath : 'baseApi',
    baseQuery : baseQuery,
    endpoints : ()=>({})
})