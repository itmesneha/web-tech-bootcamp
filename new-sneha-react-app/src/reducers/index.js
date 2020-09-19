import {combineReducers} from 'redux'; //combined Reducers is an API

import spinnerReducer from '../reducers/spinnerReducer';
import bugsReducer from '../reducers/bugsReducer';

const rootReducer = combineReducers({ //dispatch will be sent to all reducers
 spinnerState : spinnerReducer,
 bugsState : bugsReducer
});



export default rootReducer;