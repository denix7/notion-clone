import React from 'react';
import Projects from '../components/Projects/Projects/';
import MenuProject from '../components/Projects/MenuProject/';

function ProjectsPage() {
  return (
    <div>
      <div className="">
        <MenuProject />

        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
