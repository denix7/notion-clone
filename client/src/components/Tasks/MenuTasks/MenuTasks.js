import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { InputSearch } from '../../Shared/InputSearch/';
import styles from './MenuTasks.module.css';

export const MenuTasks = ({ filterItems }) => {
  const { projectId } = useParams();

  return (
    <div>
      <InputSearch />

      <div className={styles.menu}>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterItems('Pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterItems('Doing')}
          >
            Doing
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterItems('Done')}
          >
            Done
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterItems('')}
          >
            All
          </button>
        </div>


        <div>
          <label htmlFor="filter" className="dropdown">
            <div className="dd-button">
              <span>
                <i className="fas fa-filter" />
                Filter by
              </span>
            </div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
              <li>Priority</li>
              <li>Status</li>
              <li className="divider" />
            </ul>
          </label>

          <label htmlFor="sort" className="dropdown">
            <div className="dd-button">
              <span>
                <i className="fas fa-sort-alpha-up" />
                Sort
              </span>
            </div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
              <li>Name</li>
              <li>Date</li>
              <li className="divider" />
            </ul>
          </label>
            <Link
              to={`/projects/${projectId}/export`}
              className="btn btn-primary rounded"
              id="btn-add"
            >
              <span>
                <i className="fas fa-plus-circle" />
              </span>
              Export
            </Link>
        </div>
      </div>
    </div>
  );
};

MenuTasks.propTypes = {
  filterItems: PropTypes.arrayOf,
};

MenuTasks.defaultProps = {
  filterItems: {},
};

export default MenuTasks;
