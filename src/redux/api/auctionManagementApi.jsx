import { baseApi } from "./baseApi";

const auctionManagement = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getAllAuction : builder.query({
            query : ({auctionStatus , page})=>{
                let path = `/dashboard/get-all-auction`
                if(!auctionStatus){
                    path += `?page=${page}` 
                }
                if(auctionStatus){
                    path += `?mainService=${auctionStatus}&page=${page}`
                }
                return {
                     url :  path,
                    method : "GET"
                }
            }
        })
    })
})

export const { useGetAllAuctionQuery } = auctionManagement;