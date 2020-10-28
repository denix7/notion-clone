import React from 'react';
import { useParams } from 'react-router-dom';
import { Tasks } from './Tasks/Tasks';
import data from '../../data/tasksData';
import { MenuTasks } from './MenuTasks';
import { TagsSlide } from '../shared/TagsSlide/TagsSlide';
import { getProjectById } from '../../selectors/getProjectById';
import { CreateTask } from './CreateTask';

export const TasksPage = () => {
  const { projectId } = useParams();

  let project = {};
  if (projectId !== undefined) {
    project = getProjectById(projectId);
  } else {
    project.tasks = data;
  }

  return (
    <div className="container">
      <MenuTasks />
      <CreateTask />
      <TagsSlide />
      <Tasks tasks={project.tasks} />
    </div>
  );
};

export default TasksPage;
