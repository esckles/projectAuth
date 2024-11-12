import { createBrowserRouter } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
