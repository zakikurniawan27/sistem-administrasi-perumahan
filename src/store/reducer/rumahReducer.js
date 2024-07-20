import { createSlice } from "@reduxjs/toolkit";
import { getDataRumah, getDetailDataRumah } from "../action/rumahAction";

const initialState = {
  rumah: [],
  detail: [],
  statusHunian: [],
};

export const rumahReducer = createSlice({
  name: "rumah",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataRumah.fulfilled, (state, action) => {
      state.rumah = action.payload;
    });
    builder.addCase(getDetailDataRumah.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
  reducers: {
    editStatusHunianReducer: (state, action) => {
      state.statusHunian = action.payload;
    },
  },
});

export const { editStatusHunianReducer } = rumahReducer.actions;
export default rumahReducer.reducer;
