import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

import reducer from './reducer';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
