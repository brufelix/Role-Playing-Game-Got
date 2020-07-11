import React from 'react'
import ReactDOM from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducers from './react-redux/rootReducer'
import App from './App'
import './style/index.css'

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = (createStore)(rootReducers, composeEnhancers(applyMiddleware(thunk, promise)))

const store = applyMiddleware(thunk, promise)(createStore)(rootReducers)

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider> 
,document.getElementById('root'))