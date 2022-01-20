import React from 'react'
import { Provider } from 'react-redux'
import { Router, Routes, Route } from 'react-router-dom'

import Home from 'scenes/Home/Home'

export default ({ store, history }) => (
  <Provider store={store}>
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
)
