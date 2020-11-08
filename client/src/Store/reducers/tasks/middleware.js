import actions, { setTasks,addTask, modifyTask, deleteTask } from './action';
import axios from "axios";

export const loadData = (state, action, dispatch) => {
    axios.get('http://localhost:8081/api/v1/tasks')
        .then((response) => {
            dispatch(setTasks(response.data))
  })
}

export const postTask = (state, action, dispatch) => {
    axios.post('http://localhost:8081/api/v1/tasks', action.payload)
        .then((response) => {
            dispatch(addTask(response.data))
  });
}

export const putTask = (state, action, dispatch) => {
    axios.put(`http://localhost:8081/api/v1/tasks/` + action.id, action.payload)
    .then((response) => {
        console.log(response, "PUT")
        dispatch(modifyTask(response.data))
    });
}

export const removeTask = (state, action, dispatch) => {
    axios.delete('http://localhost:8081/api/v1/tasks/' + action.id)
        .then((response) => {
            dispatch(deleteTask(action.id))
  })
}

export default function taskMiddleware(store , state) {
    const {dispatch} = store;
    console.log(dispatch, 'DISPATCH')
    return (next) => (action) => {
        switch(action.type) {
            case 'LOADTASKS':
                loadData(state, action, dispatch);
            case 'POSTTASK':
                postTask(state, action, dispatch);
            case 'PUTTASK':
                putTask(state, action, dispatch);
            case 'DELETETASKASYNC':
                removeTask(state, action, dispatch);
            default:
                next(action);
        }
    }
}