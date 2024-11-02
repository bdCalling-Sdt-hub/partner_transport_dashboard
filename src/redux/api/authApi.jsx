import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        loginAdmin : builder.mutation({
            query : (data)=>{
                return {
                    url :'/auth/login',
                    method : 'POST',
                    body :  data
                }
            }
        }),
        forgetPassword : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/forgot-password',
                    method : 'POST',
                    body : data
                }
            }
        }),
        verifyOtp :builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/verify-otp',
                    method : 'POST',
                    body : data
                }
            }
        }),
        resetPassword :builder.mutation({
            query : (data)=>{
                return {
                    url : '/admin/auth/reset-password',
                    method : 'PATCH',
                    body : data
                }
            }
        })
    })
})

export const {  useLoginAdminMutation , useForgetPasswordMutation, useVerifyOtpMutation , useResetPasswordMutation } =  authApi;