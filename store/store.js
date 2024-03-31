import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { applicationApi } from "./api/applicationApi";
import { userApi } from "./api/userApi";
import { generalAPI } from "./api/generalApi";
// import { authApi } from './api/authApi';
// import { userApi } from './api/userApi';
// import { memberApi } from './api/memberApi';
// import { paymentApi } from './api/paymentApi';
// import chartYearSelectorReducer from './features/chartYearSelectorSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [generalAPI.reducerPath]: generalAPI.reducer,
    // chartYearSelector: chartYearSelectorReducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    // [memberApi.reducerPath]: memberApi.reducer,
    // [paymentApi.reducerPath]: paymentApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      applicationApi.middleware,
      userApi.middleware,
      generalAPI.middleware,
    ]),
});

export default store;
