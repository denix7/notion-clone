const initialData = [{ id: 0, value: 'task1' }];

const tasks = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default tasks;
