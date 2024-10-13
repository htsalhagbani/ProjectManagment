import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from './Erorr';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement:<ErrorPage/>
    },
  ]);

export default router