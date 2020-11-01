import React from 'react';
import Projects from './Projects';
import MenuProject from './MenuProject';

const ProjectsPage = () => {
  return (
    <div>
      <div className="container">
        <MenuProject />

        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
