import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import style from './TaskCard.module.css';

export const TaskCard = ({ task }) => {
  return (
    <div>
      <Link className="btn" to={`./tasks/${task.id}`}>
        <div className={style.card}>
          <div className="flex-between">
            <div className={style.title}>{task.name}</div>
            <div>
              <i id="delete" className="text-red fas fa-trash" />
            </div>
          </div>
          <div className={style.date}>{task.created_at}</div>

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
    created_at: PropTypes.string,
  }),
};

TaskCard.defaultProps = {
  task: {},
};

export default TaskCard;
