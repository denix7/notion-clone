const ADD = 'ADD';
const DELETE = 'DELETE';
const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';

/**
 * Add a Project
 * @param {Object} payload - The object Project
 * @return {Object} - The action to add a project
 */
export const addProject = (payload) => ({
  type: ADD,
  payload
});

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

export const deleteProject = (id) => ({
  type: DELETE,
  id,
});
