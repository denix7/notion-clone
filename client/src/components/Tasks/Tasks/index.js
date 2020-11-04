import React from 'react';
import { PropTypes } from 'prop-types';
import { TaskCard } from '../TaskCard/';
import { CreateTask } from '../CreateTask/';
import style from './Tasks.module.css';

export const Tasks = ({ tasks, filtered, removeTask, saveTask }) => {
  return (
    <>
    <div className="container">
      <div className={style.container}>
        <CreateTask saveTask={saveTask}/>
      </div>

      <div className="card-container">
        {filtered.length === 0
          ? tasks.map((task) => {
            return <TaskCard task={task} removeTask={removeTask} key={task.id} />;
          })
          : filtered.map((task) => {
            return <TaskCard task={task} removeTask={removeTask} key={task.id} />;
          })}
      </div>
    </div>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
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

Tasks.defaultProps = {
  tasks: [],
  filtered: [],
};

export default Tasks;
