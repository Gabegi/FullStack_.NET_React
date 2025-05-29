import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/", // root Route
    element: <App />, // components
    children: [
      { path: "", element: <HomePage /> },
      { path: "", element: <HomePage /> },
      { path: "", element: <HomePage /> },
      { path: "", element: <HomePage /> },
      { path: "", element: <HomePage /> },
    ],
  },
]);
