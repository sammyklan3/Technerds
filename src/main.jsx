import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { Upcoming } from './pages/upcoming/Upcoming';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/upcoming",
    element: <Upcoming />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
