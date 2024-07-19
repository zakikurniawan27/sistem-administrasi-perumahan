import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Penghuni from "./pages/penghuni/Penghuni.jsx";
import Rumah from "./pages/rumah/Rumah.jsx";
import Pembayaran from "./pages/pembayaran/Pembayaran.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import TambahPenghuni from "./pages/penghuni/TambahPenghuni.jsx";
import DetailPenghuni from "./pages/penghuni/DetailPenghuni.jsx";
import EditPenghuni from "./pages/penghuni/EditPenghuni.jsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/penghuni",
    element: <Penghuni />,
  },
  {
    path: "/tambah-penghuni",
    element: <TambahPenghuni />,
  },
  {
    path: "/detail-penghuni/:id",
    element: <DetailPenghuni />,
  },
  {
    path: "/update-penghuni/:id",
    element: <EditPenghuni />,
  },
  {
    path: "/rumah",
    element: <Rumah />,
  },
  {
    path: "/pembayaran",
    element: <Pembayaran />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rout} />
    </Provider>
  </React.StrictMode>
);
