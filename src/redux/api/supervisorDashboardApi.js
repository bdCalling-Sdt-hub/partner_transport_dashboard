import { baseApi } from "./baseApi";

const supervisorApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getTskCount : builder.query({
            query : ()=>{
                return {
                    url : '/logs-dashboard/get-task-counts',method: 'GET'
                }
            }
        })
    })
})
export const { useGetTskCountQuery } = supervisorApi;