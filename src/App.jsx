import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "./pages/events/index";
import Dashboard from "./pages/dashboard/index";

function App() {

  const router = createBrowserRouter([

    {
      path: "events",
      element: <Events />
    },
    {
      path: "dashboard",
      element: <Dashboard />
    }

  ])
  return <RouterProvider router={router} />;
}

export default App;
