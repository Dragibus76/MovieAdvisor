import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/films",
    element: <Movies/>,
  },
  {
    path: "/series",
    element: <Series/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

