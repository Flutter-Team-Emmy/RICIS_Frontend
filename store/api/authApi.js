import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  registrationUrl,
  requestOTPUrl,
  signInUrl,
  verifyOTPUrl,
} from "@/lib/configs";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    // updateUserPassword: builder.mutation({
    //   query({ token, payload }) {
    //     return {
    //       url: `/users/updatepassword/${token}`,
    //       method: 'PUT',
    //       credentials: 'include',
    //       body: payload
    //     };
    //   },
    //   invalidatesTags: [{ type: 'Users', id: 'LIST' }]
    // }),
    requestRegistrationOTP: builder.mutation({
      query(payload) {
        return {
          url: requestOTPUrl,
          method: "POST",
          //   credentials: 'include',
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    verifyOTP: builder.mutation({
      query(payload) {
        return {
          url: verifyOTPUrl,
          method: "POST",
          // credentials: 'include',
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    registerUser: builder.mutation({
      query(payload) {
        return {
          url: registrationUrl,
          method: "POST",
          // credentials: 'include',
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    signInUser: builder.mutation({
      query(payload) {
        return {
          url: signInUrl ,
          method: "POST",
          // credentials: 'include',
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
  }),
});

export const {
  useRequestRegistrationOTPMutation,
  useVerifyOTPMutation,
  useRegisterUserMutation,
  useSignInUserMutation,
} = authApi;
