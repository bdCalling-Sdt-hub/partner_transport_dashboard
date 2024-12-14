import { baseApi } from "./baseApi";

const userManagement  = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllUser : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get_all_user',
                    method : 'GET'
                }
            }
        })
    })
})

export const { useGetAllUserQuery } = userManagement