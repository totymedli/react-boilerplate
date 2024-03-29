import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import history from './history'
import reducers from './reducers'
import sagas from './sagas'

import App from './App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware),
		window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : x => x
	)
)
let sagaTask = sagaMiddleware.run(sagas)

const render = () => {
	ReactDOM.render(
		<App store={store} history={history} />,
		document.getElementById('root')
	)
}

render()

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
