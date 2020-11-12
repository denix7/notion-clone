import axios from "axios";
import { setTasks,addTask, modifyTask, deleteTask, setTasksByProject, addTaskByProject, deleteTaskByProject, modifyTaskByProject } from './action';
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
            console.log(response, 'RESPONSE')
            dispatch(modifyTask(response.data))
    });
}

export const removeTask = (state, action, dispatch) => {
    axios.delete(`${config.URL}/tasks/${action.id}`)
        .then(() => {
            dispatch(deleteTask(action.id))
  })
}

export const loadTasksByProject = (state, action, dispatch) => {
    axios.get(`${config.URL}/tasks/by-project/${action.projectId}`)
        .then((response) => {
            dispatch(setTasksByProject(response.data))
  })
}

export const postTaskByProject = (state, action, dispatch) => {
    axios.post(`${config.URL}/tasks/`, action.payload)
        .then((response) => {
            dispatch(addTaskByProject(response.data))
  });
}

export const removeTaskByProject = (state, action, dispatch) => {
    axios.delete(`${config.URL}/tasks/${action.id}`)
        .then(() => {
            dispatch(deleteTaskByProject(action.id))
  })
}

export const putTaskByProject = (state, action, dispatch) => {
    console.log('PUTTASKBYPROJECT', action)
    axios.put(`${config.URL}/tasks/${action.id}`, action.payload)
        .then((response) => {
            console.log(response, 'RESPONSE')
            dispatch(modifyTaskByProject(response.data))
    });
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
            case 'LOADTASKSBYPROJECT':
                loadTasksByProject(state, action, dispatch);
                break;
            case 'POSTTASKBYPROJECT':
                postTaskByProject(state, action, dispatch);
                break;
            case 'DELETETASKBYPROJECTASYNC':
                removeTaskByProject(state, action, dispatch);
            case 'PUTTASKBYPROJECT':
                putTaskByProject(state, action, dispatch);
                break;
            default:
                next(action);
        }
    }
}