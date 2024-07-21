import { configureStore } from "@reduxjs/toolkit";
import penghuniReducer from "./reducer/penghuniReducer";
import rumahReducer from "./reducer/rumahReducer";
import pembayaranReducer from "./reducer/pembayaranReducer";

export const store = configureStore({
  reducer: {
    penghuni: penghuniReducer,
    rumah: rumahReducer,
    pembayaran: pembayaranReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
