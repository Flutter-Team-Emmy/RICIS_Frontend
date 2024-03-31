import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  registrationUrl,
  requestOTPUrl,
  signInUrl,
  verifyOTPUrl,
} from "../../lib/configs";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    requestRegistrationOTP: builder.mutation({
      query(payload) {
        return {
          url: requestOTPUrl,
          method: "POST",
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
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    signInUser: builder.mutation({
      query(payload) {
        return {
          url: signInUrl,
          method: "POST",
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
