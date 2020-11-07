import axios from 'axios';
const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK';
const MODIFYTASK = 'MODIFYTASK';
const SETTASKS = 'SETTASKS';
const LOADTASKS = 'LOADTASKS';

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
  // data
})