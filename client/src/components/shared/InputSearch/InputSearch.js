import React from 'react';
import style from './InputSearch.module.css';

export const InputSearch = () => {
  return (
    <div>
      <i className="fas fa-search" />
      <input
        type="text"
        name="search"
        placeholder="Search.."
        className={style.input}
      />
    </div>
  );
};

export default InputSearch;
