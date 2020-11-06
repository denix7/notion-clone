import axios from 'axios';
const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';
const LOADTASK = 'LOADTASK';
const SETTASKS = 'SETTASK';
const BUSCAR = 'BUSCAR';

export const addTask = (payload) => ({
  type: ADDTASK,
  payload
});

export const deleteTask = (id) => ({
  type: DELETETASK,
  id,
});

export const modifyTask = (payload) => ({
  type: MODIFYTASK,
  payload
});


const busqueda = (data) => ({
  type: BUSCAR,
  data
})

export const busquedaAxc = (nombre) => dispatch => {
  axios('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    dispatch(busqueda(response.data))
  })
}

// export const loadTasks = (payload) => ({
//   type: LOADTASK,
//   payload
// });

// export const setTasks = (payload) => ({
//   type: SETTASKS,
//   payload
// });