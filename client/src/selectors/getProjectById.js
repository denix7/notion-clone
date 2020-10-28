import projectsData from '../data/projectsData';

export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === id);
};

export default getProjectById;
