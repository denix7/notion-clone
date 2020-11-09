import React from 'react';
import ProjectCard from '../ProjectCard/';

/**
 * Display a Projects list
 * @param  {} projects Array type
 * @param  {} removeProject function type
 */

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
