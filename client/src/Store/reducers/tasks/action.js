const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';

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