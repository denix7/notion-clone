const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTask = (x) => ({
  type: ADD,
  data: {
    id: Math.random(),
    value: x,
  },
});

export const deleteTask = (id) => ({
  type: DELETE,
  id,
});
