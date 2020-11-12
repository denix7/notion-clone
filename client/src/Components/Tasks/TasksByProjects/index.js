import React from 'react';
import { PropTypes } from 'prop-types';
import { TaskCard } from '../TaskCard/';
import { CreateTask } from '../CreateTask/';
import style from './TasksByProjects.module.css';
import { TaskCardByProject } from '../TaskCardByProject';

/**
 * Display a list of TasksByProjects
 * @param  {} task Array type
 * @param  {} filtered Array type
 * @param  {} removeTask function type
 * @param  {} saveTask function type
 */

export const TasksByProjects = ({ tasks, filtered, removeTask, saveTask }) => {
  return (
    <>
    <div className="container">
      <div className={style.container}>
        <CreateTask saveTask={saveTask}/>
      </div>

      <div className="card-container">
        {
            tasks.map((task) => {
              return <TaskCardByProject task={task} removeTask={removeTask} key={task.id} />;
          })
        }

        {/* {filtered.length === 0
          ? tasksByProjects.map((task) => {
            return <TaskCard task={task} removeTask={removeTask} key={task.id} />;
          })
          : filtered.map((task) => {
            return <TaskCard task={task} removeTask={removeTask} key={task.id} />;
          })} */}
      </div>
    </div>
    </>
  );
};

TasksByProjects.propTypes = {
  tasksByProjects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

TasksByProjects.defaultProps = {
  tasksByProjects: [],
  filtered: [],
};

export default TasksByProjects;
