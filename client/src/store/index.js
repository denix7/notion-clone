import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import taskMiddleware from './reducers/tasks/middleware'
import middlewares from './middlewares';

  // const STORE = createStore(
  //   applyMiddleware(...middlewares)
  // ) 

const STORE = createStore(
  rootReducer,
    compose(applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default STORE;
