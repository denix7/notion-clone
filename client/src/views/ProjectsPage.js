import React from 'react';
import Projects from '../Components/Projects/Projects/';
import MenuProject from '../Components/Projects/MenuProject/';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject } from '../Store/reducers/projects/action';

function ProjectsPage() {
  const projects = useSelector(state => state.project)
  const dispatch = useDispatch();

  const removeProject = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <div>
      <div className="">
        <MenuProject />

        <Projects projects={projects} removeProject={removeProject}/>
      </div>
    </div>
  );
};

export default ProjectsPage;
