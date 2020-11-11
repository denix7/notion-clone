const initialData = {
  tasks: [],
  tasksByProject: []
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
    } 
    return task;
    
  })]}
}

function deleteTask(state, action) {
  return {
    ...state,
    tasks: [...state.tasks.filter((task) => task.id !== action.id)]}
}

function setTasks(state, action) {
  return {
    ...state,
    tasks: action.data
  }
}

function setTasksByProject(state, action) {
  return {
    ...state,
    tasksByProject: action.payload
  }
}

function addTaskByProject(state, action) {
  return {
    ...state,
    tasksByProject: [...state.tasksByProject, action.payload]
  }
}

function deleteTaskByProject(state, action) {
  return {
    ...state,
    tasksByProject: [...state.tasksByProject.filter((task) => task.id !== action.id)]}
}

export default function tasks (state = initialData, action) {
  switch (action.type) {
    case 'ADDTASK':
      return addTask(state, action);
    case 'MODIFYTASK':
      return modifyTask(state, action);
    case 'DELETETASK':
      return deleteTask(state, action);
    case 'SETTASKS':
      return setTasks(state, action);
    case 'SETTASKSBYPROJECT':
      return setTasksByProject(state, action);
    case 'ADDTASKBYPROJECT':
      return addTaskByProject(state, action);
    case 'DELETETASKBYPROJECT':
      return deleteTaskByProject(state, action);
    default:
      return state;
  }
};
