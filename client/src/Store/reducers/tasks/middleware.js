import actions, { setTasks } from './action';
import axios from "axios";

export const cargarData = (state, action, dispatch) => {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            dispatch(setTasks(response.data))
  })
}

export default function taskMiddleware(store , state) {
    const {dispatch} = store;
    console.log(dispatch, 'DISPATCH')
    return (next) => (action) => {
        switch(action.type) {
            case 'LOADTASKS':
                console.log('LOAD')
                cargarData(state, action, dispatch);
            default:
                next(action);
        }
    }
}