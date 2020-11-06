const initialData = [];


function addProject(state, action) {
  return [
    ...state, 
      {
        id: Math.floor(Math.random() * 100).toString(),
        name: action.payload.title,
        date: new Date().toLocaleDateString(),
        tasks: []
      }
  ];
}
  
function deleteProject(state, action) {
  return state.filter((item) => item.id !== action.id);
}

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
