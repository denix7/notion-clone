import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addTask } from '../../actions/project';

export const CreateTask = () => {
  const [inputValue, setInputValue] = useState('');

  // const projects = useSelector((state) => state.project);
  const { projectId } = useParams();

  // const tasks2 = projects.find((item) => item.id === projectId).tasks;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 3) {
      dispatch(addTask(projectId, e.target.task.value));
      setInputValue(' ');
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          save(e);
        }}
      >
        <input
          type="text"
          name="task"
          value={inputValue}
          placeholder="New task"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
