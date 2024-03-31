import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { applicationApi } from "./api/applicationApi";
import { userApi } from "./api/userApi";
import { cloudinaryApi } from "./api/cloudinaryApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cloudinaryApi.reducerPath]: cloudinaryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      applicationApi.middleware,
      userApi.middleware,
      cloudinaryApi.middleware,
    ]),
});

export default store;
