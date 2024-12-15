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
            },
            invalidatesTags : ["category"]

        }),
        getCategory : builder.query({
            query :  (categoryStatus)=>{
                let serviceType = ""
                if (categoryStatus === "Goods" || categoryStatus === "Waste") {
                    serviceType = "move"
                  } else {
                    serviceType = "sell"
                  }
                return {
                    url : `/category/get-all-category?serviceType=${serviceType}&subServiceType=${categoryStatus}`,
                    method : 'GET'
                }
            },
            providesTags :['category']

        })
    })
})

export const { useCrateCategoryMutation , useGetCategoryQuery } = categoryManagementApi;