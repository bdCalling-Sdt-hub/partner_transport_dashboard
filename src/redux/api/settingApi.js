import { baseApi } from "./baseApi";

const settingApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTermsConditions: builder.query({
            query: () => {
                return {
                    url: '/dashboard/get-terms-conditions',
                    method: 'GET'
                }
            },
            providesTags: ['terms']
        }),
        updateTermsCondition: builder.mutation({
            query: (data) => {
                return {
                    url: '/dashboard/add-terms-conditions',
                    method: "POST",
                    body: data
                }
            }, invalidatesTags: ['terms']
        }),
        getPrivacyPolicy: builder.query({
            query: () => {
                return {
                    url: '/dashboard/get-privacy-policy',
                    method: 'GET'
                }
            },

            providesTags: ['privacy']
        }),
        updatePrivacyPolicy: builder.mutation({
            query: (data) => {
                return {
                    url: '/dashboard/add-privacy-policy',
                    method: 'POST',
                    body: data
                }
            }, invalidatesTags: ['privacy']
        }),
        getContactUs :  builder.query({
            query : ()=>{
                return {
                    url : '/variables/contact-number',method : "GET"
                }
            }
        }),
        updateContact : builder.mutation({
            query : (data)=>{
                return {
                    url : '/variables/contact-number',
                    method : 'POST',
                    body : data
                }
            }
        })
    })
})

export const { useGetTermsConditionsQuery, useUpdateTermsConditionMutation  , useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation , useGetContactUsQuery , useUpdateContactMutation} = settingApis;