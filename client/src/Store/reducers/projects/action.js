const ADDPROJECT = 'ADDPROJECT';
const DELETEPROJECT = 'DELETEPROJECT';
const SETPROJECT = 'SETPROJECT';
const LOADPROJECTS = 'LOADPROJECTS';
const POSTPROJECT = 'POSTPROJECT';
const DELETEPROJECTASYNC = 'DELETEPROJECTASYNC';

/**
 * Add a Project
 * @param {Object} payload - The object Project
 * @return {Object} - The action to add a project
 */
export const addProject = (payload) => ({
  type: ADDPROJECT,
  payload
});

export const deleteProject = (id) => ({
  type: DELETEPROJECT,
  id,
});

export const setProject = (payload) => ({
  type: SETPROJECT,
  payload
});

export const loadProjects = () => ({
  type: LOADPROJECTS
});

export const postProject = (payload) => ({
  type: POSTPROJECT,
  payload
});

export const deleteProjectAsync = (id) => ({
  type: DELETEPROJECTASYNC,
  id,
});
