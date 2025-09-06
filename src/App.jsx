import React from "react";
import "./App.css";
import Login from "./pages/login/index"
import './pages/login/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import Events from "./pages/events/index";
import Dashboard from "./pages/dashboard/index";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>

    },
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"events",
      element:<Events/>
    },
    {
      path:"dashboard",
      element:<Dashboard/>
    }

  ])
  return <RouterProvider router={router} />;
}

export default App;
