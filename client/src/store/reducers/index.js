import { combineReducers } from 'redux';
import task from './tasks/task';
import project from './projects/project';

const rootReducer = combineReducers({
  task,
  project,
});

export default rootReducer;
