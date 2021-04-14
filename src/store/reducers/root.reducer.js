import { combineReducers } from 'redux';
import CounterReducer from './count.reducer'
import modalReducer from './modal.reducer';

export default combineReducers({
    counter: CounterReducer,
    modal: modalReducer
})