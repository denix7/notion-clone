import React from 'react';
import { useSelector } from 'react-redux';
import style from './HomePage.module.css';

export const HomePage = () => {
  const projects = useSelector((state) => state.project.projects);
  console.log(projects, "NAVBARSLIDE")

  let counter = 0;
  let pending = 0;
  let doing = 0;
  let done = 0;
  projects.forEach((project) => {
    project.tasks.forEach((element) => {
      if (element.status === 'Pending') pending += 1;
      if (element.status === 'Doing') doing += 1;
      if (element.status === 'Done') done += 1;
      counter += 1;
    });
  });

  return (
    <div>
      <div className={style.center}>
        <div>
          <h1 className={style.circle}>{projects.length}</h1>
          <h3>Projects</h3>
        </div>
        <div className={style.separator} />
        <div>
          <h1 className={style.circle}>{counter}</h1>
          <h3>Tasks</h3>
        </div>
      </div>
      <div className={style.tasks}>
        <div>
          <h3 className={style.circleTasks}>{pending}</h3>
          <h3 className={style.circleTasks}>{doing}</h3>
          <h3 className={style.circleTasks}>{done}</h3>
        </div>
        <div>
          <h4>Pending</h4>
          <h4>Doing</h4>
          <h4>Done</h4>
        </div>
        <div />
      </div>
    </div>
  );
};

export default HomePage;
