import { createSlice } from "@reduxjs/toolkit";
import {
  getsaldoagustus,
  getsaldoapril,
  getsaldodesember,
  getsaldofebruari,
  getsaldojanuari,
  getsaldojuli,
  getsaldojuni,
  getsaldomaret,
  getsaldomei,
  getsaldonovember,
  getsaldooktober,
  getsaldoseptember,
  getTotalSaldoPengeluaran,
} from "../action/pengeluaranAction";

const initialState = {
  totalSaldoKeluar: [],
  saldojanuari: [],
  saldofebruari: [],
  saldomaret: [],
  saldoapril: [],
  saldomei: [],
  saldojuni: [],
  saldojuli: [],
  saldoagustus: [],
  saldoseptember: [],
  saldooktober: [],
  saldonovember: [],
  saldodesember: [],
};

export const pengeluaranReducer = createSlice({
  name: "pengeluaran",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTotalSaldoPengeluaran.fulfilled, (state, action) => {
      state.totalSaldoKeluar = action.payload;
    });
    builder.addCase(getsaldojanuari.fulfilled, (state, action) => {
      state.saldojanuari = action.payload;
    });
    builder.addCase(getsaldofebruari.fulfilled, (state, action) => {
      state.saldofebruari = action.payload;
    });
    builder.addCase(getsaldomaret.fulfilled, (state, action) => {
      state.saldomaret = action.payload;
    });
    builder.addCase(getsaldoapril.fulfilled, (state, action) => {
      state.saldoapril = action.payload;
    });
    builder.addCase(getsaldomei.fulfilled, (state, action) => {
      state.saldomei = action.payload;
    });
    builder.addCase(getsaldojuni.fulfilled, (state, action) => {
      state.saldojuni = action.payload;
    });
    builder.addCase(getsaldojuli.fulfilled, (state, action) => {
      state.saldojuli = action.payload;
    });
    builder.addCase(getsaldoagustus.fulfilled, (state, action) => {
      state.saldoagustus = action.payload;
    });
    builder.addCase(getsaldoseptember.fulfilled, (state, action) => {
      state.saldoseptember = action.payload;
    });
    builder.addCase(getsaldooktober.fulfilled, (state, action) => {
      state.saldooktober = action.payload;
    });
    builder.addCase(getsaldonovember.fulfilled, (state, action) => {
      state.saldonovember = action.payload;
    });
    builder.addCase(getsaldodesember.fulfilled, (state, action) => {
      state.saldodesember = action.payload;
    });
  },
});

export default pengeluaranReducer.reducer;
