import {createStore, combineReducers} from 'redux'
import catalogReducer from './reducers/catalogReducer'
import {persistedState} from '../components/NavBar/NavBar.jsx'

const reducers = combineReducers({
    catalogReducer
})

let store = createStore(reducers,persistedState)

window.store = store

export default store