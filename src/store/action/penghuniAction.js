import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editPenghuniReducer } from "../reducer/penghuniReducer";

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

export const detailPenghuni = createAsyncThunk(
  "penghuni/detailPenghuni",
  async (id) => {
    const data = await axios.get(
      `http://localhost:8080/api/v1/penghuni/detail/penghuni/${id}`
    );
    return data.data;
  }
);

export const updatePenghuni = (id, data) => async (dispatch) => {
  const { res } = await axios.put(
    `http://localhost:8080/api/v1/penghuni/update/penghuni/${id}`,
    data,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
  );
  dispatch(editPenghuniReducer(res));
};
