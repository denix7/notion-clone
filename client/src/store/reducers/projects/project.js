const initialData = {
  projects: []
};


function addProject(state, action) {
  return {
    ...state, 
      projects: [...state.projects, action.payload]
  };
}
  
function deleteProject(state, action) {
  return {
    ...state,
    projects: [...state.projects.filter((project) => project.id !== action.id)]
  }
}

function setProject(state, action) {
  console.log(action.payload, 'REDUCER')
  return {
    ...state,
    projects: action.payload
  }
}

const projects = (state = initialData, action) => {
  switch (action.type) {
    case 'ADDPROJECT':
      return addProject(state, action);
    case 'SETPROJECT':
      return setProject(state, action);
    case 'DELETEPROJECT':
      return deleteProject(state, action);
    default:
      return state;
  }
};

export default projects;
