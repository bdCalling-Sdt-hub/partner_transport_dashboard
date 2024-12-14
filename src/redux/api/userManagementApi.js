import { baseApi } from "./baseApi";

const userManagement  = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllUser : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get_all_user',
                    method : 'GET'
                }
            },
            providesTags : ['userManagement']
        }),
        blockUnBlockUser : builder.mutation({
            query :(data)=>{
                return {
                    url : "/dashboard/block-unblock-user-partner-admin",
                    method : "PATCH",
                    body: data
                }
            },
            invalidatesTags : ['userManagement']
        })
    })
})

export const { useGetAllUserQuery, useBlockUnBlockUserMutation } = userManagement