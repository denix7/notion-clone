import React, {useEffect} from 'react';
import Projects from 'components/Projects/Projects/';
import MenuProject from 'components/Projects/MenuProject/';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject } from 'store/reducers/projects/action';
import { loadProjects, deleteProjectAsync } from '../../Store/reducers/projects/action';

function ProjectsPage() {
  const projects = useSelector(state => state.project.projects)
  const dispatch = useDispatch();

  const removeProject = (id) => {
    dispatch(deleteProjectAsync(id));
  };

  const saveProject = (title) => {
    dispatch(postProject({
      title: title,
    }));
  };

  function getData() {
    dispatch(loadProjects())
  }

  useEffect(() => {
    getData();
  }, [loadProjects]);

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
