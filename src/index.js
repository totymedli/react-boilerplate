import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import router from './router'
import reducers from './reducers'
import sagas from './sagas'

import App from './App'

const sagaMiddleware = createSagaMiddleware()
const enhancers = [
	applyMiddleware(sagaMiddleware),
]

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(reducers,	compose(...enhancers))
let sagaTask = sagaMiddleware.run(sagas)

const root = createRoot(document.getElementById('root'))
root.render(<App store={store} router={router} />)

if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			console.log("[HMR] Reloaded reducers")
			const newReducers = require('./reducers').default
			store.replaceReducer(newReducers)
		})
		module.hot.accept('./sagas', () => {
			console.log("[HMR] Reloaded sagas")
      const newSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(newSagas)
      })
		})
		module.hot.accept('./App', () => {
			console.log("[HMR] Rerendered app")
			render()
		})
	}
}
