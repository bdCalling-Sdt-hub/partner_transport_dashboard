import { baseApi } from "./baseApi";

const makeAdminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createMakeAdmin: builder.mutation({
            query: (formattedData) => ({
                url: '/auth/register',
                method: 'POST',
                body: formattedData
            }),
            invalidatesTags: ['getAdmin']
        }),
        getAllAdmin: builder.query({
            query: (searchTerm) => ({
                url: `/dashboard/get_all_admin?searchTerm=${searchTerm}`, method: 'GET'
            }),
            providesTags: ["getAdmin"]
        }),
        deleteAdmin: builder.mutation({
            query: (email) => ({
                url: `/dashboard/delete_admin?email=${email}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['getAdmin']

        })
    })
})
export const { useCreateMakeAdminMutation, useGetAllAdminQuery, useDeleteAdminMutation } = makeAdminApi;