import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root.reducer'
import logger from './middleware/logger'
import test from './middleware/test'

// export const store = createStore(RootReducer)

// 使用中间件logger
// export const store = createStore(RootReducer, applyMiddleware(logger))

// 使用中间件logger, test
export const store = createStore(RootReducer, applyMiddleware(logger, test))