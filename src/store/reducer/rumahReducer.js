import { createSlice } from "@reduxjs/toolkit";
import { getDataRumah } from "../action/rumahAction";

const initialState = {
  rumah: [],
  detail: [],
};

export const rumahReducer = createSlice({
  name: "rumah",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataRumah.fulfilled, (state, action) => {
      state.rumah = action.payload;
    });
  },
});

export default rumahReducer.reducer;
