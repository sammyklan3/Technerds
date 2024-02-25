import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { ThemeProvider } from "./context/ThemeContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the theme object to the ThemeProvider */}
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
