import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://143.198.238.107:5050',
    // baseUrl : 'http://10.0.60.118:5050',
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
// export const imageUrl = "http://10.0.60.118:5050"
export const imageUrl = "http://143.198.238.107:5050"