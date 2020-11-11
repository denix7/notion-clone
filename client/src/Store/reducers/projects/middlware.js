import axios from "axios";
import { setProject, addProject, deleteProject } from './action';
import config from '../../../config';

export const loadProjects = (state, action, dispatch) => {
    axios.get(`${config.URL}/projects/`)
        .then((response) => {
            console.log(response.data, "LOAD PROJECTS")
            dispatch(setProject(response.data))
  })
}

export const postProject = (state, action, dispatch) => {
    axios.post(`${config.URL}/projects/`, action.payload)
        .then((response) => {
            console.log(response, "POST PROJECT MIDLEWARE")
            dispatch(addProject(response.data))
  });
}

export const removeProject = (state, action, dispatch) => {
    axios.delete(`${config.URL}/projects/${action.id}`)
        .then(() => {
            dispatch(deleteProject(action.id))
  })
}

// export const putTask = (state, action, dispatch) => {
//     console.log('PUTTASK', action)
//     axios.put(`${config.URL}/projects/${action.id}`, action.payload)
//         .then((response) => {
//             console.log(response)
//             dispatch(modifyTask(response.data))
//     });
// }

export default function taskMiddleware(store , state) {
    const {dispatch} = store;
    return (next) => (action) => {
        switch(action.type) {
            case 'LOADPROJECTS':
                return loadProjects(state, action, dispatch);
            case 'POSTPROJECT':
                return postProject(state, action, dispatch);
            case 'DELETEPROJECTASYNC':
                return removeProject(state, action, dispatch);
            default:
                next(action);
        }
    }
}