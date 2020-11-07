import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import taskMiddleware from './reducers/tasks/middleware'

const STORE = createStore(
  rootReducer,
    compose(applyMiddleware(taskMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default STORE;
