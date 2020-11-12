import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * Display a single Project Card
 * @param  {} project Object type
 * @param  {} removeProject function type
 */

const ProjectItem = ({ project, removeProject }) => {
  return (
    <div>
      {
        project.title !== 'default' &&
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
      }
      <Link to={`/projects/${project.id}/tasks`}>
        <div className="card">
          <div className="flex-between">
            <div className="card-title">{project.title} ({project.tasksQuantity})</div>
          </div>
          <div className="card-date">{project.entry}</div>
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
