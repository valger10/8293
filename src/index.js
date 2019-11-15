import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './store/rootReducer'

import App from './App'
import * as serviceWorker from './serviceWorker'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
// Adds dev tools
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
// Creates Store for global data storing
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store

ReactDOM.render(
  <div className="wrapper">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
/* eslint-enable */
