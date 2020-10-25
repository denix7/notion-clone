import React from 'react'
import style from '../InputSearch/InputSearch.module.css';

export const InputSearch = () => {
    return (
        <div>
            <i className="fas fa-search"></i>
            <input type="text" name="search" placeholder="Search.." className={style.input}></input>
        </div>
    )
}
