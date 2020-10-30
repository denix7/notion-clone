import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './TaskCard.module.css';
import { deleteTask } from '../../../actions/project';

export const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <div className={style.buttonDelete}>
        <a
          role="button"
          onClick={() => remove(task.id)}
          onKeyDown={() => remove(task.id)}
        >
          <span>
            <i id="delete" className="text-red fas fa-trash" />
          </span>
        </a>
      </div>
      <Link className="btn" to={`./tasks/${task.id}`}>
        <div className={style.card}>
          <div className="flex-between">
            <div className={style.title}>{task.name}</div>
          </div>
          <div className={style.date}>{task.date}</div>

          <div className={style.tags}>
            <div className={style.container}>
              <div className="flex">
                <span>
                  <Link to="/tags">
                    <div className={style.tag}>
                      <span>#football</span>
                    </div>
                  </Link>
                </span>
                <Link to="/tags">
                  <div className={style.tag}>
                    <span>#football</span>
                  </div>
                </Link>
                <span>
                  <Link to="/tags">
                    <div className={style.tag}>
                      <span>#football</span>
                    </div>
                  </Link>
                </span>
              </div>
              <div className={style.icons}>
                <span>
                  5 <i className="fas fa-comment-alt" />
                </span>
                <span>
                  <i className="fas fa-heart" />
                </span>
                <span>
                  <i className="fas fa-clock" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    created_at: PropTypes.string,
  }),
};

TaskCard.defaultProps = {
  task: {},
};

export default TaskCard;
