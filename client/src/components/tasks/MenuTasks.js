import React from 'react';
import { PropTypes } from 'prop-types';
import { InputSearch } from '../Shared/InputSearch/InputSearch';

export const MenuTasks = ({ filterItems }) => {
  return (
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
      <div className="menu">
        <div>
          <InputSearch />
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
