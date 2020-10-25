import React from 'react'
import { Link } from 'react-router-dom';
import style from '../TaskCard/TaskCard.module.css'

export const TaskCard = ({task}) => {
    return (
        <div>
            <Link className="btn" to={`./tasks/${task.id}`}>
                <div className={style.card}>
                    <div className="flex-between">
                        <div className={style.title}>
                            {task.name}
                        </div>
                        <div>
                            <i id="delete" className="text-red fas fa-trash"></i>
                        </div>
                    </div>
                    <div className={style.date}>
                        {task.created_at}
                    </div>

                    <div className={style.tags}>
                        <div className={style.container}>
                            <div className="flex">
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
                            <div className={style.icons}>
                                <span>5 <i class="fas fa-comment-alt"></i></span>
                                <span><i class="fas fa-heart"></i></span>
                                <span><i class="fas fa-clock"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
