const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';
const SETTASKS = 'SETTASKS';
const LOADTASKS = 'LOADTASKS';
const POSTTASK = 'POSTTASK';
const PUTTASK = 'PUTTASK';
const DELETETASKASYNC = 'DELETETASKASYNC';

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


export const setTasks = (data) => ({
  type: SETTASKS,
  data
})

export const loadTasks = () => ({
  type: LOADTASKS,
});

export const postTask = (payload) => ({
  type: POSTTASK,
  payload
});

export const putTask = (id, payload) => ({
  type: PUTTASK,
  id,
  payload
});

export const deleteTaskAsync = (id) => ({
  type: DELETETASKASYNC,
  id,
});