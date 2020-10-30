const initialData = [];

const projects = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    case 'ADDTASK':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                name: action.x,
                date: Date.now(),
                id: Math.floor(Math.random() * 100).toString(),
                status: 'Pending',
                due: '',
              },
            ],
          };
        }
        return item;
      });
    case 'MODIFYTASK':
      return state.map((project) => ({
        ...project,
        tasks: project.tasks.map((task) => {
          if (task.id === action.taskId) {
            return {
              ...task,
              name: action.name,
              priority: action.priority,
              status: action.status,
              due: action.due,
            };
          }
          return task;
        }),
      }));
    case 'DELETETASK':
      return state.map((project) => ({
        ...project,
        tasks: project.tasks.filter((task) => task.id !== action.id),
      }));
    default:
      return state;
  }
};

export default projects;
