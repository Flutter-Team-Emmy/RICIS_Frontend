// roleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchingStates: {
    isLoading: false,
    isSuccess: false,
    error: "",
    // refetch:,
  },
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
  },
});

export const { setApplications, setFetchingStates } = applicationsSlice.actions;
export const selectApplications = (state) => state.applications.applications;
export const selectFetchingStates = (state) =>
  state.applications.fetchingStates;
export default applicationsSlice.reducer;
