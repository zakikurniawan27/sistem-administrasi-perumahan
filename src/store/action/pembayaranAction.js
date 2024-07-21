import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editStatusPembayaranReducer } from "../reducer/pembayaranReducer";

export const getDataPembayaran = createAsyncThunk(
  "pembayaran/getDataPembayaran",
  async () => {
    const data = await axios.get("http://localhost:8080/api/v1/pembayaran");
    return data.data;
  }
);

export const bayarIuran = createAsyncThunk(
  "pembayaran/bayarIuran",
  async (data) => {
    const res = await axios.post(
      "http://localhost:8080/api/v1/pembayaran/bayar/iuran",
      data
    );
    return res;
  }
);

export const updateStatusPembayaran = (id, data) => async (dispatch) => {
  const { res } = await axios.patch(
    `http://localhost:8080/api/v1/bulan/update/status/pembayaran/${id}`,
    data
  );
  dispatch(editStatusPembayaranReducer(res));
};

export const getDataBulan = createAsyncThunk("bulan/getDataBulan", async () => {
  const data = await axios.get("http://localhost:8080/api/v1/bulan");
  return data.data;
});

export const getDataTotalSaldoMasuk = createAsyncThunk(
  "saldo/getDataTotalSaldoMasuk",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo"
    );
    return data.data;
  }
);

export const getDataTotalSaldoMasukJanuari = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukJanuari",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/januari"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukFebruari = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukFebruari",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/februari"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukMaret = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukMaret",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/maret"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukApril = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukApril",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/april"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukMei = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukMei",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/mei"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukJuni = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukJuni",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/juni"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukJuli = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukJuli",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/juli"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukAgustus = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukAgustus",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/agustus"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukSeptember = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukSeptember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/september"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukOktober = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukOktober",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/oktober"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukNovember = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukNovember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/november"
    );
    return data.data;
  }
);
export const getDataTotalSaldoMasukDesember = createAsyncThunk(
  "saldo/getDataTotalSaldoMasukDesember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pembayaran/total-saldo/desember"
    );
    return data.data;
  }
);
