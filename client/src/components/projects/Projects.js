import React from 'react';
import { useSelector } from 'react-redux';
import ProjectItem from './ProjectItem';
// import data from '../../data/projectsData';

const Projects = () => {
  const projects = useSelector((state) => state.project);

  return (
    <div className="card-container" id="projects">
      {projects.map((project) => {
        return <ProjectItem key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
