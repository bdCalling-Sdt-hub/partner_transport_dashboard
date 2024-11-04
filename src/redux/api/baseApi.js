import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://192.168.10.14:5052',
    prepareHeaders  :  (headers)=>{
        const token = JSON.parse(localStorage.getItem('token'));
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
export const imageUrl = "http://192.168.10.14:5052"