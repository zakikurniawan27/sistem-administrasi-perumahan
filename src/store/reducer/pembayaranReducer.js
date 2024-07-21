import { createSlice } from "@reduxjs/toolkit";
import { getDataBulan, getDataPembayaran } from "../action/pembayaranAction";

const initialState = {
  dataBayar: [],
  statusPembayaran: [],
  bulan: [],
};

export const pembayaranReducer = createSlice({
  name: "pembayaran",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataPembayaran.fulfilled, (state, action) => {
      state.dataBayar = action.payload;
    });
    builder.addCase(getDataBulan.fulfilled, (state, action) => {
      state.bulan = action.payload;
    });
  },
  reducers: {
    editStatusPembayaranReducer: (state, action) => {
      state.statusPembayaran = action.payload;
    },
  },
});

export const { editStatusPembayaranReducer } = pembayaranReducer.actions;
export default pembayaranReducer.reducer;
