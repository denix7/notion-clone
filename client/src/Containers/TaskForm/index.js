import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { putTask } from '../../Store/reducers/tasks/action';

function Task ({task, setTask}) {
  const history = useHistory();

   const [data, setData] = useState(task);
   console.log(data, 'DATA');

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    // task = {
    //   //id: data.id.toString(),
    //   description: data.description,
    //   // priority: data.priority,
    //   // status: data.status
    // }
    setTask(data.id, data.description);
    history.push(`/tasks`);
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
              <h2>{data.description}</h2>
              <input
                className={styles.inputEdit}
                name="description"
                id="input-description"
                type="text"
                value={data.description}
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
                Entry
              </div>
              <div className={styles.itemValue}>{task.entry}</div>
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
                  <option value="PENDING">Pending</option>
                  <option value="DOING">Doing</option>
                  <option value="DONE">Done</option>
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
                  <option value="M">Medium</option>
                  <option value="H">High</option>
                  <option value="L">Low</option>
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
  const tasks = state.task.tasks;
  const {taskId} = ownProps.match.params;  
  const task = tasks.find((item) => item.id.toString() === taskId);

  return {task};
}

function mapDispatchToProps(dispatch) {
  function setTask(id, desc) {
    console.log('DISPATCH', desc)
    dispatch(putTask(id, {description: desc}))
  }

  return {setTask};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);