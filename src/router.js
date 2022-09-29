import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from 'scenes/Home/Home'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
