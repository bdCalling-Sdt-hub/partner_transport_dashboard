import { baseApi } from "./baseApi";

const variableManagementApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getAllVariable :  builder.query({
            query : ()=>{
                return {
                    url : '/variables/find',method : 'GET'
                }
            },
            providesTags : ['variables']
        }),
        updateVariable : builder.mutation({
            query :(data)=>{
                return {
                    url : '/variables/update',
                    method : "PATCH",
                    body : data
                }
            }
        }),
        getConversation : builder.query({
            query : (searchTerm)=>{
                return {
                    url :`/message/get-conversation?searchTerm=${searchTerm}`,
                    method : 'GET'
                }
            }
        }),
        getMessagesConversation : builder.query({
            query : ({senderId, receiverId})=>{
                return {
                    url : `/message/get-message?senderId=${senderId}&receiverId=${receiverId}`,method : "GET"
                }
            }
        }),
        getAllBankTransfer : builder.query({
            query : (page)=>{
                return {
                    url : `/payment/withdraw?page=${page}`,
                    method : 'GET'
                }
            },
            providesTags  :['bankTransfer']
        })
    })
})
export const { useGetAllVariableQuery , useUpdateVariableMutation , useGetConversationQuery, useGetMessagesConversationQuery , useGetAllBankTransferQuery} = variableManagementApi;