// roleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const defaultDate = new Date(2024, 0, 1);
const defaultStartDate = new Date(2024, 0, 1);
const defaultEndDate = new Date(2024, 11, 31);

const initialState = {
  selectedOption: "year",
  date: JSON.stringify(defaultDate),
  start_date: JSON.stringify(defaultStartDate),
  end_date: JSON.stringify(defaultEndDate),
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
      console.log(action.payload);
    },
    setDate: (state, action) => {
      state.date = action.payload;
      console.log(action.payload);
    },
    setStartDate: (state, action) => {
      state.start_date = action.payload;
      // console.log(action.payload);
    },
    setEndDate: (state, action) => {
      state.end_date = action.payload;
      // console.log(action.payload);
    },
    // setFetchingStates: (state, action) => {
    //   state.fetchingStates = action.payload;
    // },
  },
});

export const { setSelectedOption, setDate, setStartDate, setEndDate } =
  statisticsSlice.actions;
export const selectOption = (state) => state.statistics.selectedOption;
export const selectDate = (state) => state.statistics.date;
export const selectStartDate = (state) => state.statistics.start_date;
export const selectEndDate = (state) => state.statistics.end_date;

export default statisticsSlice.reducer;
