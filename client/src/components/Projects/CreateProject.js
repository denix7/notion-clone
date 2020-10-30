import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProject } from '../../actions/project';

export const CreateProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const save = (e) => {
    e.preventDefault();
    dispatch(addProject(e.target.project.value));
    history.push('/projects');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          save(e);
        }}
        className="container"
      >
        <input type="text" name="project" placeholder="New project" />
        <button className="btn btn-primary" type="button">
          <i className="fas fa-plus-circle" />
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
