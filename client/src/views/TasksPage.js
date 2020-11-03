import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tasks } from '../components/Tasks/Tasks/';
import { MenuTasks } from '../components/Tasks/MenuTasks/MenuTasks';
// import data from '../../data/tasksData';

export const TasksPage = () => {
  const { projectId } = useParams();
  const projects = useSelector((state) => state.project);
  const project = projects.find((item) => item.id === projectId);

  const data = [...project.tasks];

  const [tasksFilters, setTaskFilters] = useState(data);

  let newTasks = [];
  const filterItems = (status) => {
    if (status === 'all') {
      setTaskFilters(data);
      return;
    }
    newTasks = data.filter((item) => item.status === status);
    setTaskFilters(newTasks);
  };

  return (
    <div className="container">
      <MenuTasks filterItems={filterItems} />
      {/* <TagsSlide /> */}

      <Tasks tasks={data} filtered={tasksFilters} />
    </div>
  );
};

export default TasksPage;
