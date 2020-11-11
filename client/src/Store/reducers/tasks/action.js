const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';
const SETTASKS = 'SETTASKS';
const LOADTASKS = 'LOADTASKS';
const POSTTASK = 'POSTTASK';
const PUTTASK = 'PUTTASK';
const DELETETASKASYNC = 'DELETETASKASYNC';
const LOADTASKSBYPROJECT = 'LOADTASKSBYPROJECT';
const SETTASKSBYPROJECT = 'SETTASKSBYPROJECT';
const POSTTASKBYPROJECT = 'POSTTASKBYPROJECT';
const ADDTASKBYPROJECT = 'ADDTASKBYPROJECT';
const DELETETASKBYPROJECT = 'DELETETASKBYPROJECT';
const DELETETASKBYPROJECTASYNC = 'DELETETASKBYPROJECTASYNC';

/**
 * Add a Project
 * @param {Object} payload - The object Task
 * @return {Object} - The action to add a Task
 */

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

export const loadTasksByProject = (projectId) => ({
  type: LOADTASKSBYPROJECT,
  projectId
});

export const setTasksByProject = (payload) => ({
  type: SETTASKSBYPROJECT,
  payload
});

export const postTaskByProject = (payload) => ({
  type: POSTTASKBYPROJECT,
  payload
});

export const addTaskByProject = (payload) => ({
  type: ADDTASKBYPROJECT,
  payload
});

export const deleteTaskByProject = (id) => ({
  type: DELETETASKBYPROJECT,
  id,
});

export const deleteTaskByProjectAsync = (id) => ({
  type: DELETETASKBYPROJECTASYNC,
  id,
});