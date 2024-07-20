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
import DetailRumah from "./pages/rumah/DetailRumah.jsx";
import TambahRumah from "./pages/rumah/TambahRumah.jsx";
import EditRumah from "./pages/rumah/EditRumah.jsx";
import TambahPenghuniRumah from "./pages/rumah/TambahPenghuniRumah.jsx";
import EditPenghuniRumah from "./pages/rumah/EditPenghuniRumah.jsx";

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
    path: "/rumah/tambah",
    element: <TambahRumah />,
  },
  {
    path: "/rumah/detail/:id",
    element: <DetailRumah />,
  },
  {
    path: "/rumah/edit/:id",
    element: <EditRumah />,
  },
  {
    path: "/rumah/tambah-penghuni/:id",
    element: <TambahPenghuniRumah />,
  },
  {
    path: "/rumah/update-penghuni/:id",
    element: <EditPenghuniRumah />,
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
