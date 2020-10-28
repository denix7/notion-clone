import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ProjectItem = ({ project }) => {
  return (
    <div>
      <Link to={`./projects/${project.id}/tasks`}>
        <div className="card">
          <div className="flex-between">
            <div className="card-title">{project.name}</div>
            <div>
              <i id="delete" className="text-red fas fa-trash" />
            </div>
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
