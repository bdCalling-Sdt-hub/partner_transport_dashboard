import { baseApi } from "./baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        crateCategory : builder.mutation({
            query : (data)=>{
                return {
                    url : '/category/create-category',
                    method : 'POST',
                    body : data,
                }
            }
        })
    })
})

export const { useCrateCategoryMutation } = categoryManagementApi;