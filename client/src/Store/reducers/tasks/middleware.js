import axios from "axios";
import { setTasks,addTask, modifyTask, deleteTask } from './action';
import config from '../../../config';

export const loadData = (state, action, dispatch) => {
    axios.get(`${config.URL}/tasks/`)
        .then((response) => {
            dispatch(setTasks(response.data))
  })
}

export const postTask = (state, action, dispatch) => {
    axios.post(`${config.URL}/tasks/`, action.payload)
        .then((response) => {
            dispatch(addTask(response.data))
  });
}

export const putTask = (state, action, dispatch) => {
    console.log('PUTTASK', action)
    axios.put(`${config.URL}/tasks/${action.id}`, action.payload)
        .then((response) => {
            console.log(response)
            dispatch(modifyTask(response.data))
    });
}

export const removeTask = (state, action, dispatch) => {
    axios.delete(`${config.URL}/tasks/${action.id}`)
        .then(() => {
            dispatch(deleteTask(action.id))
  })
}

export default function taskMiddleware(store , state) {
    const {dispatch} = store;
    return (next) => (action) => {
        switch(action.type) {
            case 'LOADTASKS':
                loadData(state, action, dispatch);
                break;
            case 'POSTTASK':
                postTask(state, action, dispatch);
                break;
            case 'PUTTASK':
                putTask(state, action, dispatch);
                break;
            case 'DELETETASKASYNC':
                removeTask(state, action, dispatch);
                break;
            default:
                next(action);
        }
    }
}