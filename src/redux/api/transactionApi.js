import { baseApi } from "./baseApi";

const transactionApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllTransaction : builder.query({
            query : (page)=>{
                return {
                    url : `/dashboard/transactions?page=${page}`,
                    method : 'GET'
                }
            }
        })
    })
})

export const { useGetAllTransactionQuery } =  transactionApi