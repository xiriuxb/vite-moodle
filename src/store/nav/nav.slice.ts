import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    isSideVisible: false,
  },
  reducers: {
    toggleSideBarVisibility: (state, action) => {
        state.isSideVisible = action.payload;
    },
  },
});

export const { toggleSideBarVisibility } = navSlice.actions;
