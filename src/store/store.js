import { configureStore } from "@reduxjs/toolkit";
import penghuniReducer from "./reducer/penghuniReducer";
import rumahReducer from "./reducer/rumahReducer";

export const store = configureStore({
  reducer: {
    penghuni: penghuniReducer,
    rumah: rumahReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
