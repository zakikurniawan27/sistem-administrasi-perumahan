import { createSlice } from "@reduxjs/toolkit";
import { addPenghuni, getDataPenghuni } from "../action/penghuniAction";

const initialState = {
  data: null,
  detail: [],
};

export const penghuniReducer = createSlice({
  name: "penghuni",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataPenghuni.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addPenghuni.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default penghuniReducer.reducer;
