import actions from './action';

async function loadTasks(state, action, dispatch) {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
    dispatch(busqueda(response.data))
  })
}

export default function taskMiddleware(dispatch, getState) {
    return (next) => (action) => {
        switch(action.type) {
            case actions.loadTasks:
                loadTasks(getState(), action, dispatch);
            default:
                next(action);
        }
    }
}