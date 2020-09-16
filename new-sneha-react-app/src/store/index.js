import {createStore, combineReducers} from 'redux'; //combined Reducers is an API

import spinnerReducer from '../reducers/spinnerReducer';
import bugsReducer from '../reducers/bugsReducer';

const rootReducer = combineReducers({
 spinnerState : spinnerReducer,
 bugState : bugsReducer
});

const store = createStore(rootReducer);

export default store;