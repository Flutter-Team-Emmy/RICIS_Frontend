// roleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  firstPae: 1,
  lastPage: 1,
  // totalPages: 1,
  fetchingStates: {
    isLoading: false,
    isSuccess: false,
    error: "",
    // refetch:,
  },
  afterDate: null,
  beforeDate: null,
  applications: [],
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload;
    },
    setFetchingStates: (state, action) => {
      state.fetchingStates = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFirstPage: (state, action) => {
      state.firstPae = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
    setBeforeDate: (state, action) => {
      state.beforeDate = action.payload;
    },
    setAfterDate: (state, action) => {
      state.afterDate = action.payload;
    },
  },
});

export const {
  setApplications,
  setFetchingStates,
  setPage,
  setFirstPage,
  setLastPage,
  setBeforeDate,
  setAfterDate,
} = applicationsSlice.actions;
export const selectApplications = (state) => state.applications.applications;
export const selectPage = (state) => state.applications.page;
export const selectFirstPage = (state) => state.applications.firstPae;
export const selectLastPage = (state) => state.applications.lastPage;
export const selectBeforeDate = (state) => state.applications.beforeDate;
export const selectAfterDate = (state) => state.applications.afterDate;
export const selectFetchingStates = (state) =>
  state.applications.fetchingStates;
export default applicationsSlice.reducer;
