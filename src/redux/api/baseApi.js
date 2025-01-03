import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://157.245.94.100:6001',
    // baseUrl : 'http://103.145.138.200:5052',
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
// export const imageUrl = "http://103.145.138.200:5052"
export const imageUrl = "http://157.245.94.100:6001"