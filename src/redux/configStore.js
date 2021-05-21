import { combineReducers, createStore } from 'redux';
import { BTGameKeoBuaBaoReducer } from './reducer/BTGameKeoBuaBaoReducer'

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ state của ứng dụng
    BTGameKeoBuaBaoReducer
})
export const store = createStore(rootReducer);