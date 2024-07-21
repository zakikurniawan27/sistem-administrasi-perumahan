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
