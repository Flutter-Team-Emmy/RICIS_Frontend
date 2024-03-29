import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/lib/configs";
import { getToken } from "@/utils/authHelpers";

const token = getToken();

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    verifyUser: builder.mutation({
      query(Id) {
        return {
          url: `/users/verify/${Id}`,
          method: "PUT",
          // credentials: 'include',
          // body: payload
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    getUser: builder.query({
      query(token) {
        return {
          url: `/user`,
          headers: { Authorization: `Bearer ${token}` },
          //   credentials: 'include'
        };
      },
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    getAllUsers: builder.query({
      query() {
        return {
          url: "/users",
          headers: { Authorization: `Bearer ${token}` },
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    deleteUser: builder.mutation({
      query(userId) {
        return {
          url: `/users/${userId}`,
          method: "DELETE",
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useUpdateUserPasswordMutation,
  useResetUserPasswordMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useVerifyUserMutation,
  useUpdateUserProfileDataMutation,
  useUploadUserAvatarMutation,
} = userApi;
