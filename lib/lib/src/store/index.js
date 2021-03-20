'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('redux');
const redux_thunk_1 = require('redux-thunk');
const reducers_1 = require('../reducers');
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : redux_1.compose;
const middlewares = [redux_thunk_1.default];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-logger').createLogger());
}
const enhancer = composeEnhancers(redux_1.applyMiddleware(...middlewares));
function configStore() {
    const store = redux_1.createStore(reducers_1.default, enhancer);
    return store;
}
exports.default = configStore;
//# sourceMappingURL=index.js.map