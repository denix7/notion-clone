import React from 'react';
import { PropTypes } from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';

export const Tasks = ({ tasks }) => {
  return (
    <div className="card-container">
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf,
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
