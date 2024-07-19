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
