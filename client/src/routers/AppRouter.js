import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProjectsPage from '../components/projects/ProjectsPage';
import { TasksPage } from '../components/tasks/TasksPage';
import { Navbar } from '../components/shared/Navbar/Navbar';
import { Task } from '../components/tasks/Task';
import { TagsPage } from '../components/tags/TagsPage';
import { NavbarSlide } from '../components/shared/NavBarSlide/NavbarSlide';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <NavbarSlide />

        <Switch>
          {/* <Route exact path="/" component={ProjectsPage}/> */}
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/add" component={ProjectsPage} />
          <Route exact path="/projects/:projectId" component={TasksPage} />
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
          <Route exact path="/tasks" component={TasksPage} />
          <Route exact path="/tasks/add" component={Task} />
          <Route exact path="/tasks/:taskId" component={Task} />
          <Route exact path="/tags" component={TagsPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
