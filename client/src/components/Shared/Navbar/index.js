import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div>
      <header>
        <ul className={styles.nav}>
          <Link to="/">
            <span>
              <i className="fas fa-book" />
            </span>
            <li>Todo Notes</li>
          </Link>

          <div>
            <li className="title">
              <NavLink activeClassName="active" exact to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="title">
              <NavLink activeClassName="active" exact to="/stats">
                Stats
              </NavLink>
            </li>
            <li className="title">
              <NavLink activeClassName="active" exact to="/tasks">
                Tasks
              </NavLink>
            </li>
            <label className="dropdown">
              <div className="dd-button">
                <span>
                  <i className="fas fa-ellipsis-h" />
                </span>
              </div>

              <input type="checkbox" className="dd-input" id="test" />

              <ul className="dd-menu">
                <li>Export</li>
                <li>Profile</li>
                <li className="divider" />
                <li>Switch</li>
              </ul>
            </label>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
