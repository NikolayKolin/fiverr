import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Components from "./pages/Components.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ForcastDetails from "./pages/ForcastDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/forecast-details",
    element: <ForcastDetails />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
