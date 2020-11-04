import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from '../ProjectCard/';
// import data from '../../data/projectsData';

const Projects = ({projects, removeProject}) => {
  return (
    <div className="card-container" id="projects">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} removeProject={removeProject} />;
      })}
    </div>
  );
};

export default Projects;
