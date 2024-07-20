import { createSlice } from "@reduxjs/toolkit";
import {
  addRumah,
  getDataRumah,
  getDetailDataRumah,
} from "../action/rumahAction";

const initialState = {
  rumah: [],
  detail: [],
  statusHunian: [],
  edit: [],
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
    builder.addCase(addRumah.fulfilled, (state, action) => {
      state.rumah = action.payload;
    });
  },
  reducers: {
    editStatusHunianReducer: (state, action) => {
      state.statusHunian = action.payload;
    },
    editRumah: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { editStatusHunianReducer, editRumah } = rumahReducer.actions;
export default rumahReducer.reducer;
