import React, { useState } from 'react'
import "./App.css"
import Button from 'react-bootstrap/Button';
import PropertyModal from './Modal/Modal';
import MobilePropertyView from './components/MobilePropertyView';
import PropertyDetails from './components/PropertyDetails';
import useMobile from './hooks/useMobile';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Home from './components/home';

const App = () => {
  let routers = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
    {
      path:'mobileview',
      element: <MobilePropertyView />
    }
  ])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App