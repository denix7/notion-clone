import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/projectsData';

export const NavbarSlide = () => {
  return (
    <div>
      <nav className="main-menu">
        <div className="settings" />
        <div className="scrollbar" id="style-1">
          <ul>
            {data.map((project) => {
              return (
                <li className="darkerli" key={project.id}>
                  <Link to={`/projects/${project.id}/tasks`}>
                    <i className="fa fa-rocket fa-lg" />
                    <span className="nav-text">{project.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <li>
            <Link to="tasks">
              <i className="fa fa-question-circle fa-lg" />
              <span className="nav-text">Help</span>
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSlide;
