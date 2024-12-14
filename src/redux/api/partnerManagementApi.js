import { baseApi } from "./baseApi";

const partnerManagementApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllPartner :  builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get_all_partner',
                    method : 'GET'
                }
            }
        }),
        getPartnerDetails : builder.query({
            query : (id)=>{
                return {
                    url : `/dashboard/get_partner_details?id=${id}`,method : 'GET'
                }
            }
        })
    })
})

export const {useGetAllPartnerQuery , useGetPartnerDetailsQuery} = partnerManagementApi;