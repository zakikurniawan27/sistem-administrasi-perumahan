import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Penghuni from "./pages/penghuni/Penghuni.jsx";
import Rumah from "./pages/rumah/Rumah.jsx";

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
    path: "/rumah",
    element: <Rumah />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>
);
