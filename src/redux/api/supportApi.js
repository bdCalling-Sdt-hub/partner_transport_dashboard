import { baseApi } from "./baseApi";

const supportApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllFileClaim : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get-file-claim',
                    method : 'GET'
                }
            }
        }),
        getAllTicket : builder.query({
            query : (search)=>{
                return {
                    url : `/support/get-ticket?searchTerm=${search}`,
                    method : 'GET'
                }
            },
            providesTags : ['reply']
        }),
        replyTicket :  builder.mutation({
            query : ({id, data})=>{
                return {
                    url : `/support/reply-ticket/${id}`,
                    method : "PATCH",
                    body : data
                }
            },
            invalidatesTags : ['reply']
        })
    })
})

export const { useGetAllFileClaimQuery, useGetAllTicketQuery , useReplyTicketMutation } = supportApi