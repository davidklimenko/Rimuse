import {createStore, combineReducers} from 'redux'
import catalogReducer from './reducers/catalogReducer'

const reducers = combineReducers({
    catalogReducer
})

let store = createStore(reducers)

window.store = store

export default store