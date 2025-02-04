import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { editRumah, editStatusHunianReducer } from "../reducer/rumahReducer";

export const getDataRumah = createAsyncThunk("rumah/getDataRumah", async () => {
  const data = await axios.get("http://localhost:8080/api/v1/rumah");
  return data.data;
});

export const updateStatusHunian = (id, data) => async (dispatch) => {
  const { res } = await axios.patch(
    `http://localhost:8080/api/v1/rumah/update/status/hunian/${id}`,
    data
  );
  dispatch(editStatusHunianReducer(res));
};

export const updateRumah = (id, data) => async (dispatch) => {
  const { res } = await axios.put(
    `http://localhost:8080/api/v1/rumah/update/${id}`,
    data
  );
  dispatch(editRumah(res));
};

export const getDetailDataRumah = createAsyncThunk(
  "rumah/getDetailDataRumah",
  async (id) => {
    const data = await axios.get(
      `http://localhost:8080/api/v1/rumah/detail/${id}`
    );
    return data.data;
  }
);

export const addRumah = createAsyncThunk("rumah", async (data) => {
  const res = await axios.post(
    "http://localhost:8080/api/v1/rumah/tambahRumah",
    data
  );
  return res;
});
