import { combineReducers } from 'redux'
import gotReducer from './reducers'

const rootReducers = combineReducers({
    got: gotReducer
})

export default rootReducers