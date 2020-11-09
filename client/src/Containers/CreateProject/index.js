import React from 'react';
import { useHistory } from 'react-router-dom';
import { addProject } from 'store/reducers/projects/action';
import { connect } from 'react-redux';

/**
 * Display an input form to create a new project
 * @param  {} setProject function type
 */

function CreateProject({setProject}) {
  const history = useHistory();
  
  const save = (e) => {
    e.preventDefault();
    setProject({title: e.target.project.value});
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

function mapStateToProps(state) {
  return null;
}

function mapDispatchToProps(dispatch) {
  function setProject(project) {
    dispatch(addProject(project))
  }

  return {setProject};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
