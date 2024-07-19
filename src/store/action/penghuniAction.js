import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataPenghuni = createAsyncThunk(
  "penghuni/getDataPenghuni",
  async () => {
    const data = await axios.get("http://localhost:8080/api/v1/penghuni");
    return data.data;
  }
);

export const addPenghuni = createAsyncThunk(
  "penghuni/addPenghuni",
  async (data) => {
    const res = await axios.post(
      "http://localhost:8080/api/v1/penghuni/tambahPenghuni",
      data,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return res;
  }
);
