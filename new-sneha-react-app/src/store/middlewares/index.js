//tailor made middlewares for learning

// import asyncMiddleware from './asyncMiddleware';
// import loggerMiddleware from './loggerMiddleware';
// import promiseMiddleware from './promiseMiddleware';

import { applyMiddleware } from 'redux';

//redux middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composedMiddlewares = applyMiddleware(logger, thunk);

export default composedMiddlewares;

