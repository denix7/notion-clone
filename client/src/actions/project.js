const ADD = 'ADD';
const DELETE = 'DELETE';
const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';

export const addProject = (x) => ({
  type: ADD,
  data: {
    id: Math.floor(Math.random() * 100).toString(),
    name: x,
    date: new Date().toLocaleDateString(),
    tasks: [],
  },
});

export const addTask = (id, x) => ({
  type: ADDTASK,
  id,
  x,
});

export const deleteTask = (id) => ({
  type: DELETETASK,
  id,
});

export const modifyTask = (projectId, taskId, name, tag, status, due, priority) => ({
  type: MODIFYTASK,
  projectId,
  taskId,
  name,
  status,
  tag,
  due,
  priority
});

export const deleteProject = (id) => ({
  type: DELETE,
  id,
});
