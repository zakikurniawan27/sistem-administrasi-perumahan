import { createSlice } from "@reduxjs/toolkit";
import {
  getDataBulan,
  getDataPembayaran,
  getDataTotalSaldoMasuk,
  getDataTotalSaldoMasukAgustus,
  getDataTotalSaldoMasukApril,
  getDataTotalSaldoMasukDesember,
  getDataTotalSaldoMasukFebruari,
  getDataTotalSaldoMasukJanuari,
  getDataTotalSaldoMasukJuli,
  getDataTotalSaldoMasukJuni,
  getDataTotalSaldoMasukMaret,
  getDataTotalSaldoMasukMei,
  getDataTotalSaldoMasukNovember,
  getDataTotalSaldoMasukOktober,
  getDataTotalSaldoMasukSeptember,
} from "../action/pembayaranAction";

const initialState = {
  dataBayar: [],
  statusPembayaran: [],
  bulan: [],
  totalSaldoMasuk: [],
  saldoMasukJanuari: [],
  saldoMasukFebruari: [],
  saldoMasukMaret: [],
  saldoMasukApril: [],
  saldoMasukMei: [],
  saldoMasukJuni: [],
  saldoMasukJuli: [],
  saldoMasukAgustus: [],
  saldoMasukSeptember: [],
  saldoMasukOktober: [],
  saldoMasukNovember: [],
  saldoMasukDesember: [],
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
    builder.addCase(getDataTotalSaldoMasuk.fulfilled, (state, action) => {
      state.totalSaldoMasuk = action.payload;
    });
    builder.addCase(
      getDataTotalSaldoMasukJanuari.fulfilled,
      (state, action) => {
        state.saldoMasukJanuari = action.payload;
      }
    );
    builder.addCase(
      getDataTotalSaldoMasukFebruari.fulfilled,
      (state, action) => {
        state.saldoMasukFebruari = action.payload;
      }
    );
    builder.addCase(getDataTotalSaldoMasukMaret.fulfilled, (state, action) => {
      state.saldoMasukMaret = action.payload;
    });
    builder.addCase(getDataTotalSaldoMasukApril.fulfilled, (state, action) => {
      state.saldoMasukApril = action.payload;
    });
    builder.addCase(getDataTotalSaldoMasukMei.fulfilled, (state, action) => {
      state.saldoMasukMei = action.payload;
    });
    builder.addCase(getDataTotalSaldoMasukJuni.fulfilled, (state, action) => {
      state.saldoMasukJuni = action.payload;
    });
    builder.addCase(getDataTotalSaldoMasukJuli.fulfilled, (state, action) => {
      state.saldoMasukJuli = action.payload;
    });
    builder.addCase(
      getDataTotalSaldoMasukAgustus.fulfilled,
      (state, action) => {
        state.saldoMasukAgustus = action.payload;
      }
    );
    builder.addCase(
      getDataTotalSaldoMasukSeptember.fulfilled,
      (state, action) => {
        state.saldoMasukSeptember = action.payload;
      }
    );
    builder.addCase(
      getDataTotalSaldoMasukOktober.fulfilled,
      (state, action) => {
        state.saldoMasukOktober = action.payload;
      }
    );
    builder.addCase(
      getDataTotalSaldoMasukNovember.fulfilled,
      (state, action) => {
        state.saldoMasukNovember = action.payload;
      }
    );
    builder.addCase(
      getDataTotalSaldoMasukDesember.fulfilled,
      (state, action) => {
        state.saldoMasukDesember = action.payload;
      }
    );
  },
  reducers: {
    editStatusPembayaranReducer: (state, action) => {
      state.statusPembayaran = action.payload;
    },
  },
});

export const { editStatusPembayaranReducer } = pembayaranReducer.actions;
export default pembayaranReducer.reducer;
