import { createSlice } from "@reduxjs/toolkit";
import {
  addPenghuni,
  detailPenghuni,
  getDataPenghuni,
} from "../action/penghuniAction";

const initialState = {
  data: null,
  detail: [],
  edit: [],
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
    builder.addCase(detailPenghuni.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
    // builder.addCase(updatePenghuni.fulfilled, (state, action) => {
    //   state.data = action.payload;
    // });
  },
  reducers: {
    editPenghuniReducer: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { editPenghuniReducer } = penghuniReducer.actions;
export default penghuniReducer.reducer;
