// import {createStore, applyMiddleware} from 'redux'; 
import {createStore} from 'redux'; 
import rootReducer from '../reducers';
import composedMiddlewares from './middlewares';

const store = createStore(
    rootReducer,
    composedMiddlewares
);

// window['store'] = store;

export default store;