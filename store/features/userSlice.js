// roleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setRole, setUser } = userSlice.actions;
export const selectRole = (state) => state.role?.role;
export const selectUser = (state) => state.user?.user;
export default userSlice.reducer;
