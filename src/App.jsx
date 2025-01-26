import React, { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router';
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import FormComponent from "./SpotCreateForm.jsx";
import ProductComponent from "./SpotList.jsx";
import Spot from "./Spot.jsx";
import SpotDetail from "./SpotDetail.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/spots',
                element: <ProductComponent/>
            },
            {
                path: '/spots/create',
                element: <FormComponent/>
            },
              {
                  path: '/spot/:id',
                  element: <SpotDetail/>
              },
        ]
    }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
