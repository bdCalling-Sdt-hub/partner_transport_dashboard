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
            query: () => ({
                url: '/dashboard/get_all_admin', method: 'GET'
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