import React from 'react'
import ReactDOM from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducers from './react-redux/rootReducer'
import App from './App'
import './style/index.css'

const store = applyMiddleware(thunk, promise)(createStore)(rootReducers)

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider> 
,document.getElementById('root'))