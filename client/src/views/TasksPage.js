import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Tasks } from '../Components/Tasks/Tasks/';
import { MenuTasks } from '../Components/Tasks/MenuTasks/MenuTasks';
import { deleteTask } from '../Store/reducers/projects/action';
import { addTask } from '../Store/reducers/projects/action';

export const TasksPage = () => {
  const { projectId } = useParams();
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const project = projects.find((item) => item.id === projectId);

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  const saveTask = (title) => {
    dispatch(addTask({projectId : projectId, taskTitle: title}));
  };

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

      <Tasks tasks={data} removeTask={removeTask} saveTask={saveTask} filtered={tasksFilters} />
    </div>
  );
};

export default TasksPage;
