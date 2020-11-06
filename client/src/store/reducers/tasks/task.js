const initialData = {
  tasks: []
};

function addTask(state, action) {
  return {
    ...state,
    tasks: [...state.tasks, action.payload]
  }
}

function modifyTask(state, action) {
  return {
    ...state,
    tasks: [...state.tasks.map((task) => {
    if(task.id === action.payload.id) {
      return action.payload
    } else {
      return task;
    }
  })]}
}

function deleteTask(state, action) {
  return {
    ...state,
    tasks: [...state.tasks.filter((task) => task.id !== action.id)]}
}

function loadTasks(state, action) {
  return {
    ...state,
    tasks: action.data
  }
}

export default function tasks (state = initialData, action) {
  switch (action.type) {
    case 'ADDTASK':
      return addTask(state, action);
    case 'MODIFYTASK':
      return modifyTask(state, action);
    case 'DELETETASK':
      return deleteTask(state, action);
    case 'BUSCAR':
      return loadTasks(state, action);
    default:
      return state;
  }
};
