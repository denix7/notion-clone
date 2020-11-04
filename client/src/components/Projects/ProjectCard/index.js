import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ProjectItem = ({ project, removeProject }) => {
  return (
    <div>
      <a
        role="button"
        className="card-delete-project"
        onClick={() => removeProject(project.id)}
        onKeyDown=""
      >
        <span>
          <i id="delete" className="text-red fas fa-trash" />
        </span>
      </a>
      <Link to={`./projects/${project.id}/tasks`}>
        <div className="card">
          <div className="flex-between">
            <div className="card-title">{project.name}</div>
          </div>
          <div className="card-date">{project.date}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};

ProjectItem.defaultProps = {
  project: {},
};
