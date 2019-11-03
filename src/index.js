import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'
import reducers from './reducers'

import Home from 'scenes/Home'

let store = createStore(
	reducers,
	compose(
		window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : x => x
	)
)

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</Provider>,
		document.getElementById('root')
	)
}

render()

if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept('/', () => {
			render()
		})
	}
}
