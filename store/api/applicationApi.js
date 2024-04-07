"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/lib/configs";
import { getToken } from "@/utils/authHelpers";

const token = getToken();

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getToken(); // Get the token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Set Authorization header
      }
      return headers;
    },
  }),
  tagTypes: ["Applications"],
  endpoints: (builder) => ({
    updateApplication: builder.mutation({
      query({ token, payload }) {
        return {
          url: `/users/updatepassword/${token}`,
          method: "PUT",
          // credentials: "include",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    addNewApplication: builder.mutation({
      query(payload) {
        return {
          url: "/application",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getSingleApplication: builder.query({
      query(token) {
        return {
          url: `users/${token}`,
        };
      },
      providesTags: (result, error, id) => [{ type: "Applications", id }],
    }),
    getAllApplications: builder.query({
      query() {
        return {
          url: "/application",
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getForms: builder.query({
      query() {
        return {
          url: "/forms",
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    getSingleFormFields: builder.query({
      query(formId) {
        return {
          url: `/forms/${formId}/fields`,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
    createFlutterTransaction: builder.mutation({
      query(payload) {
        return {
          url: "/transactions",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
  }),
});

export const {
  useAddNewApplicationMutation,
  useUpdateApplicationMutation,
  useGetSingleApplicationQuery,
  useGetAllApplicationsQuery,
  useGetFormsQuery,
  useGetSingleFormFieldsQuery,
  useCreateFlutterTransactionMutation
} = applicationApi;
