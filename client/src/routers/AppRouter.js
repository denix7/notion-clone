import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ProjectsPage from '../views/ProjectsPage';
import { TasksPage } from '../views/TasksPage';
import { TagsPage } from '../views/TagsPage';
import { Navbar } from '../components/Shared/Navbar/';
import { NavbarSlide } from '../components/Shared/NavBarSlide/';
import { Task } from '../components/Tasks/TaskForm/';
import { CreateProject } from '../components/Projects/CreateProject/';
import { HomePage } from '../components/Shared/HomePage/';
import { TaskPrint } from '../components/Tasks/TasksPrint/';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <NavbarSlide />

        <Switch>
          <Route 
            exact 
            path="/" 
            component={HomePage} 
          />

          <Route 
            exact 
            path="/projects" 
            component={ProjectsPage} 
          />

          <Route 
            exact
            path="/projects/add" 
            component={CreateProject} 
          />

          <Route 
            exact 
            path="/projects/:projectId" 
            component={TasksPage} 
          />

          <Route
            exact
            path="/projects/:projectId/tasks"
            component={TasksPage}
          />

          <Route
            exact
            path="/projects/:projectId/tasks/:taskId"
            component={Task}
          />

          <Route 
            exact 
            path="/tasks" 
            component={TasksPage} 
          />

          <Route 
            exact 
            path="/tasks/add" 
            component={Task} 
          />

          <Route 
            exact 
            path="/tasks/:taskId" 
            component={Task} 
          />

          <Route 
            exact 
            path="/tags" 
            component={TagsPage} 
          />

          <Route 
            exact 
            path="/projects/:projectId/export" 
            component={TaskPrint} 
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
