const initialData = [];

function addProject(state, action) {
  return [...state, action.data];
}

function deleteProject(state, action) {
  return state.filter((item) => item.id !== action.id);
}

function addTask(state, action) {
  return state.map((item) => {
    if (item.id === action.id) {
      return {
        ...item,
        tasks: [
          ...item.tasks,
          {
            name: action.x,
            date: new Date().toLocaleDateString(),
            id: Math.floor(Math.random() * 100).toString(),
            status: 'Pending',
            due: '',
          },
        ],
      };
    }
    return item;
  });
}

function modifyTask(state, action) {
  return state.map((project) => ({
    ...project,
    tasks: project.tasks.map((task) => {
      if (task.id === action.taskId) {
        return {
          ...task,
          name: action.name,
          status: action.status,
          due: action.due,
          tag: action.tag,
          priority: action.priority
        };
      }
      return task;
    }),
  }));
}

function deleteTask(state, action) {
  return state.map((project) => ({
    ...project,
    tasks: project.tasks.filter((task) => task.id !== action.id),
  }));
}

const projects = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD':
      return addProject(state, action);
    case 'DELETE':
      return deleteProject(state, action);
    case 'ADDTASK':
      return addTask(state, action);
    case 'MODIFYTASK':
      return modifyTask(state, action);
    case 'DELETETASK':
      return deleteTask(state, action);
    default:
      return state;
  }
};

export default projects;
