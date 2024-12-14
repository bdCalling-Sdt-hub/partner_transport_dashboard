import { baseApi } from "./baseApi";

const userManagement  = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllUser : builder.query({
            query : ({searchTerms, page})=>{
                return {
                    url : `/dashboard/get_all_user?page=${page}&searchTerm=${searchTerms}`,
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
        }),
        SendNotice :  builder.mutation({
            query : ({data , sendAllChecked ,sendNoticeId})=>{
                let url = "/dashboard/notice/user"
                if(sendAllChecked){
                    url += "?all_user=true"
                }else{
                    url += `?userId=${sendNoticeId}`
                }
                console.log(data);
                return {
                    url ,
                    method : 'POST',
                    body : data
                }
            }
        })
    })
})

export const { useGetAllUserQuery, useBlockUnBlockUserMutation , useSendNoticeMutation } = userManagement