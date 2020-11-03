import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from '../ProjectCard/';
// import data from '../../data/projectsData';

const Projects = () => {
  const projects = useSelector((state) => state.project);

  return (
    <div className="card-container" id="projects">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
