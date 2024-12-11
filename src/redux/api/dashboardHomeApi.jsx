import { baseApi } from "./baseApi";

const dashboardHomeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        overviewDashboard: builder.query({
            query : ()=>{
                return {
                    url :'/dashboard/total-counts',
                    method : 'GET'
                }
            }
        })
   })
})
export const { useOverviewDashboardQuery } = dashboardHomeApi;