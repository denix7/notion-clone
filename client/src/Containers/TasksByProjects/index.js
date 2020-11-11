import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tasks } from 'components/Tasks/Tasks/';
import { MenuTasks } from 'components/Tasks/MenuTasks/MenuTasks';
import { loadTasksByProject, deleteTaskByProjectAsync } from 'store/reducers/tasks/action';
import { postTaskByProject, deleteTaskByProject } from '../../Store/reducers/tasks/action';

export const TaskByProjects = () => {
  
  const data = useSelector((state) => state.task.tasksByProject);
  const dispatch = useDispatch();
  const {projectId} = useParams();
  
  useEffect(() => {
    getData();
  }, [projectId]);

  const removeTask = (id) => {
    dispatch(deleteTaskByProjectAsync(id));
  };

  const saveTask = (title) => {
    dispatch(postTaskByProject({
      projectId: projectId,
      description: title,
    }));
  };

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

  function getData() {
    dispatch(loadTasksByProject(projectId))
  }

  return (
    <div className="container">
      <MenuTasks filterItems={filterItems} />
      {/* <TagsSlide /> */}

      <Tasks tasks={data} removeTask={removeTask} saveTask={saveTask} filtered={tasksFilters} />
    </div>
  );
};

export default TaskByProjects;
