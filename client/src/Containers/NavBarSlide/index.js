import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './NavbarSlide.module.css'

export const NavbarSlide = () => {
  const projects = useSelector((state) => state.project.projects);

  return (
    <div>
      <nav className="main-menu">
        <div className={styles.settings} />
        <div className={styles.scrollbar} id="style-1">
          <ul className={styles.ul}>
            {projects.map((project) => {
              return (
                <li className="darkerli" key={project.id}>
                  <Link to={`/projects/${project.id}/tasks`}>
                    <i className="fa fa-rocket fa-lg" />
                    <span className="nav-text">{project.title}</span>
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
