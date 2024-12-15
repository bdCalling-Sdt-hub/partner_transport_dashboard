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
    })
})

export const { useGetTermsConditionsQuery, useUpdateTermsConditionMutation } = settingApis;