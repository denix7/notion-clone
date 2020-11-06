const initialData = [];

function addTask(state, action) {
  return state.map((item) => {
    if (item.id === action.payload.projectId) {
      return {
        ...item,
        tasks: [
          ...item.tasks,
          {
            name: action.payload.taskTitle,
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
      if (task.id === action.payload.id) {
        return {
          ...task,
          name: action.payload.name,
          status: action.payload.status,
          due: action.payload.due,
          tag: action.payload.tag,
          priority: action.payload.priority
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

export default function tasks (state = initialData, action) {
  switch (action.type) {
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
