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
        })
    })
})
export const { useGetAllVariableQuery , useUpdateVariableMutation } = variableManagementApi;