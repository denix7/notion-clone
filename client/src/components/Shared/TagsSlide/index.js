import React from 'react';
import { Link } from 'react-router-dom';
import style from './TagsSlide.module.css';

export const TagsSlide = () => {
  return (
    <div>
      <div className={style.header}>
        <h3>Tags</h3>
        <Link to="/tags" className={style.show}>
          Show all
        </Link>
      </div>
      <div className={style.container}>
        <Link to="/tags">
          <div className={style.tag}>
            <span>#football</span>
          </div>
        </Link>

        <Link to="/tags">
          <div className={style.tag}>
            <span>#football</span>
          </div>
        </Link>

        <Link to="/tags">
          <div className={style.tag}>
            <span>#football</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TagsSlide;
