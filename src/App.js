import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

export default ({ store, router }) => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
