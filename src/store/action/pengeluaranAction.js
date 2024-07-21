import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTotalSaldoPengeluaran = createAsyncThunk(
  "pengeluaran/getTotalSaldoPengeluaran",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/total-saldo"
    );
    return data.data;
  }
);

export const getsaldojanuari = createAsyncThunk(
  "pengeluaran/getsaldojanuari",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-januari"
    );
    return data.data;
  }
);

export const getsaldofebruari = createAsyncThunk(
  "pengeluaran/getsaldofebruari",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-februari"
    );
    return data.data;
  }
);
export const getsaldomaret = createAsyncThunk(
  "pengeluaran/getsaldomaret",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-maret"
    );
    return data.data;
  }
);
export const getsaldoapril = createAsyncThunk(
  "pengeluaran/getsaldoapril",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-april"
    );
    return data.data;
  }
);
export const getsaldomei = createAsyncThunk(
  "pengeluaran/getsaldomei",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-mei"
    );
    return data.data;
  }
);
export const getsaldojuni = createAsyncThunk(
  "pengeluaran/getsaldojuni",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-juni"
    );
    return data.data;
  }
);
export const getsaldojuli = createAsyncThunk(
  "pengeluaran/getsaldojuli",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-juli"
    );
    return data.data;
  }
);
export const getsaldoagustus = createAsyncThunk(
  "pengeluaran/getsaldoagustus",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-agustus"
    );
    return data.data;
  }
);
export const getsaldoseptember = createAsyncThunk(
  "pengeluaran/getsaldoseptember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-september"
    );
    return data.data;
  }
);
export const getsaldooktober = createAsyncThunk(
  "pengeluaran/getsaldooktober",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-oktober"
    );
    return data.data;
  }
);
export const getsaldonovember = createAsyncThunk(
  "pengeluaran/getsaldonovember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-november"
    );
    return data.data;
  }
);
export const getsaldodesember = createAsyncThunk(
  "pengeluaran/getsaldodesember",
  async () => {
    const data = await axios.get(
      "http://localhost:8080/api/v1/pengeluaran/saldo-desember"
    );
    return data.data;
  }
);
