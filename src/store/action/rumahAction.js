import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRumah = createAsyncThunk("rumah/getDataRumah", async () => {
  const data = await axios.get("http://localhost:8080/api/v1/rumah");
  return data.data;
});
