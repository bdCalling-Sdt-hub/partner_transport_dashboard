import { baseApi } from "./baseApi";

const auctionManagement = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAuction: builder.query({
            query: ({ auctionStatus, page, itemType , selectedCategory , status ,search}) => {
                let path = `/dashboard/get-all-auction`
                if (!auctionStatus && !status) {
                    path += `?page=${page}&searchTerm=${search}`
                }
                if(!auctionStatus && selectedCategory){
                    path = `?category=${selectedCategory}&searchTerm=${search}&page=${page}`
                }
                if(auctionStatus && itemType && selectedCategory){
                    path = `?mainService=${auctionStatus}&service=${itemType}&category=${selectedCategory}&page=${page}`
                }
                if (auctionStatus) {
                    path += `?mainService=${auctionStatus}&page=${page}`
                }
                if(auctionStatus && itemType){
                    path += `?mainService=${auctionStatus}&service=${itemType}&page=${page}`
                }
                if(!auctionStatus && itemType){
                    path += `?page=${page}&service=${itemType}`
                }
                if(status){
                    path += `?status=${status}&page=${page}`
                }
                if(status && auctionStatus){
                    path += `mainService=${auctionStatus}&status=${status}&page=${page}`
                }
                return {
                    url: path,
                    method: "GET"
                }
            }
        }),
        getAllCategory : builder.query({
            query : ({auctionStatus, itemType})=>{
                let path = `/category/get-all-category`
                if(auctionStatus && itemType){
                    path += `?serviceType=${auctionStatus}&subServiceType=${itemType}`
                }
                return { 
                    url  : path,
                    method : "GET"
                }
            }
        })
    })
})

export const { useGetAllAuctionQuery, useGetAllCategoryQuery } = auctionManagement;