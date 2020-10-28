import React from 'react';
import Projects from './Projects';
import MenuProject from './MenuProject';
// import {propTypes} from 'prop-types';

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

// Projects.protoTypes = {
//     projects: propTypes.arrayOf(propTypes.shape({
//         name: propTypes.string,
//     }))
//     // onDelete: propTypes.func,
// }

// Projects.defaultProps = {
//     projects: []
// }
