import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modifyTask } from '../../../store/actions/project';
import styles from './index.module.css';
import { connect } from 'react-redux';

function Task ({task, setTask}) {
  const { projectId } = useParams();
   const history = useHistory();

   const [data, setData] = useState(task);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    task = {
      id: task.id,
      name: data.name,
      tag: data.tag,
      status: data.status,
      due: data.due,
      priority: data.priority
    }

    setTask(task);
    history.push(`/projects/${projectId}/tasks`);
  }

  return (
    <form
      onSubmit={(e) => {
        save(e);
      }}
    >
      <div className={styles.taskInfo}>
        <div className="content" id="content-description-task">
          <div className={styles.modalHeader}>
            <div>
              <h2>{data.name}</h2>
              <input
                className={styles.inputEdit}
                name="name"
                id="input-name"
                type="text"
                value={data.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalItem}>
              <div className={styles.itemProperty}>
                <span>
                  <i className="fas fa-clock" />
                </span>
                Created
              </div>
              <div className={styles.itemValue}>{task.date}</div>
            </div>
            <div className={styles.modalItem}>
              <div className={styles.itemProperty}>
                <span>
                  <i className="fas fa-th-list" />
                </span>
                Status
              </div>
              <div className={styles.itemValue}>
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
              
            <div className={styles.modalItem}>
              <div className={styles.itemProperty}>
                <span>
                  <i className="fas fa-th-list" />
                </span>
                Priority
              </div>
              <div className={styles.itemValue}>
                <select
                  name="priority"
                  value={data.priority}
                  onChange={handleInputChange}
                >
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <div className={styles.modalItem}>
              <div className={styles.itemProperty}>
                <span>
                  <i className="fas fa-clock" />
                </span>
                Tag
              </div>
              <div>
                <input
                  className={styles.inputEdit}
                  name="tag"
                  id="input-tag"
                  type="text"
                  value={data.tag}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div id="tags-container" />
              <div className={styles.modalItem}>
                <div className={styles.itemProperty}>
                  <span>
                    <i className="fas fa-calendar" />
                  </span>
                  Due
                </div>
                <input
                  type="date"
                  name="due"
                  id="input-date"
                  className={styles.itemValue}
                  className={styles.inputEdit}
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
  )
}

function mapStateToProps(state, ownProps) {
  const projects = state.project;
  const {projectId} = ownProps.match.params;
  const {taskId} = ownProps.match.params;

  const project = projects.find((item) => item.id === projectId);
  const task = project.tasks.find((item) => item.id === taskId);

  return {task};
}

function mapDispatchToProps(dispatch) {
  function setTask(task) {
    dispatch(
      modifyTask(task)
    )
  }

  return {setTask};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);