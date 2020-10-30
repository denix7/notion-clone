import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modifyTask } from '../../actions/project';

export const Task = () => {
  const { taskId, projectId } = useParams();
  const history = useHistory();

  const projects = useSelector((state) => state.project);
  const project = projects.find((item) => item.id === projectId);
  const task = project.tasks.find((item) => item.id === taskId);

  const dispatch = useDispatch();

  // const [inputValue, setInputValue] = useState(task.name);
  const [data, setData] = useState(task);
  // const [data, setData] = useState({
  //   name: '',
  //   priority: ''
  // })

  const handleInputChange = (e) => {
    setData(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    // if(data.trim().length > 3){
    dispatch(
      modifyTask(
        projectId,
        taskId,
        data.name,
        data.priority,
        data.status,
        data.due
      )
    );
    history.push(`/projects/${projectId}/tasks`);
    // }
  };

  return (
    <form
      onSubmit={(e) => {
        save(e);
      }}
    >
      <div className="task-info">
        <div className="content" id="content-description-task">
          <div className="modal-header">
            <div>
              <h2>{data.name}</h2>
              <input
                className="input-edit"
                name="name"
                id="input-name"
                type="text"
                value={data.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-item">
              <div className="item-property">
                <span>
                  <i className="fas fa-clock" />
                </span>
                Created
              </div>
              <div className="item-value">{task?.date}</div>
            </div>
            <div className="modal-item">
              <div className="item-property">
                <span>
                  <i className="fas fa-th-list" />
                </span>
                Status
              </div>
              <div className="item-value">
                <select
                  name="status"
                  value={data.status}
                  onChange={handleInputChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>
            <div className="modal-item">
              <div className="item-property">
                <span>
                  <i className="fas fa-clock" />
                </span>
                Priority
              </div>
              <div>
                <input
                  className="input-edit"
                  name="priority"
                  id="input-priority"
                  type="text"
                  value={data.priority}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div id="tags-container" />
            <div className="modal-item">
              <div className="item-property">
                <span>
                  <i className="fas fa-calendar" />
                </span>
                Due
              </div>
              <input
                type="date"
                name="due"
                id="input-date"
                className="item-value input-edit"
                value={data.due}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              id="btn-update-task"
              className="btn btn-primary rounded py-3"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Task;
