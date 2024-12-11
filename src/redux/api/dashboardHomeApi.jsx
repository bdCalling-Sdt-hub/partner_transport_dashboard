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
        }),
        incomeOverView : builder.query({
            query: ({year})=>{
                return {
                    url : `/dashboard/income-overview?year=${year}`,
                    method : "GET"
                }
            }
        }),
        partnerGrowthOverview : builder.query({
            query :  ({year})=>{
                return {
                    url : `/dashboard//user-growth?year=${year}`,
                    method : 'GET'
                }
            }
        })
   })
})
export const { useOverviewDashboardQuery , useIncomeOverViewQuery , usePartnerGrowthOverviewQuery } = dashboardHomeApi;