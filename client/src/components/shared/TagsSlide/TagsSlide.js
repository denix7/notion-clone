import React from 'react'
import style from '../TagsSlide/TagsSlide.module.css'
import { Link } from 'react-router-dom';

export const TagsSlide = () => {
    return (
        <div>
            <div className={style.header}>
                <h3>Tags</h3>
                <Link to='/tags' className={style.show}>Show all</Link>
            </div>
            <div className={style.container}>
                
                <Link to='/tags'>
                    <div className={style.tag}>
                        <span>#football</span>
                    </div>
                </Link>
                
                <Link to='/tags'>
                    <div className={style.tag}>
                        <span>#football</span>
                    </div>
                </Link>
                
                <Link to='/tags'>
                    <div className={style.tag}>
                        <span>#football</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
