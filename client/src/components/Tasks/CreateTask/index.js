import React, { useState } from 'react';

export const CreateTask = ({saveTask}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 3) {
      saveTask(e.target.task.value);
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
          <span><i className="fas fa-plus-circle"></i></span>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
