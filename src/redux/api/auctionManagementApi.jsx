import { baseApi } from "./baseApi";

const buildQueryString = (params) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            searchParams.append(key, value);
        }
    });
    return searchParams.toString();
};

const auctionManagement = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllAuction: builder.query({
        //     query: ({ auctionStatus, page, itemType , selectedCategory , status ,search}) => {
        //         let path = `/dashboard/get-all-auction`
        //         if (!auctionStatus && !status) {
        //             path += `?page=${page}&searchTerm=${search}`
        //         }
        //         if(!auctionStatus && selectedCategory){
        //             path = `?category=${selectedCategory}&searchTerm=${search}&page=${page}`
        //         }
        //         if(auctionStatus && itemType && selectedCategory){
        //             path = `?mainService=${auctionStatus}&service=${itemType}&category=${selectedCategory}&page=${page}`
        //         }
        //         if (auctionStatus) {
        //             path += `?mainService=${auctionStatus}&page=${page}`
        //         }
        //         if(auctionStatus && itemType){
        //             path += `?mainService=${auctionStatus}&service=${itemType}&page=${page}`
        //         }
        //         if(!auctionStatus && itemType){
        //             path += `?page=${page}&service=${itemType}`
        //         }
        //         if(status){
        //             path += `?status=${status}&page=${page}`
        //         }
        //         if(status && auctionStatus){
        //             path += `mainService=${auctionStatus}&status=${status}&page=${page}`
        //         }
        //         return {
        //             url: path,
        //             method: "GET"
        //         }
        //     }
        // }),
        getAllAuction: builder.query({
            query: ({ auctionStatus, page, itemType, selectedCategory, status, search }) => {
                const queryParams = {
                    page,
                    searchTerm: search,
                    mainService: auctionStatus,
                    service: itemType,
                    category: selectedCategory,
                    status,
                };

                const queryString = buildQueryString(queryParams);
                return {
                    url: `/dashboard/get-all-auction?${queryString}`,
                    method: 'GET',
                };
            },
        }),
        getAllCategory: builder.query({
            query: ({ auctionStatus, itemType }) => {
                let path = `/category/get-all-category`
                if (auctionStatus && itemType) {
                    path += `?serviceType=${auctionStatus}&subServiceType=${itemType}`
                }
                return {
                    url: path,
                    method: "GET"
                }
            }
        }),
        getAuctionManagementDetails: builder.query({
            query: (id) => {
                return {
                    url: `services/details/${id}`,

                }
            }
        }),
        getConversation: builder.query({
            query: ({ senderId, receiverId }) => {
                return {
                    url: `/message/get-message?senderId=${senderId}&receiverId=${receiverId}`,
                    method: 'GET'
                }
            },
            transformResponse:((data)=>{
                console.log(data);
            })
        })
    })
})

export const { useGetAllAuctionQuery, useGetAllCategoryQuery, useGetConversationQuery , useGetAuctionManagementDetailsQuery } = auctionManagement;