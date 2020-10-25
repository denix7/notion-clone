import React from 'react'
import { TaskCard } from '../TaskCard/TaskCard';

export const Tasks = ({tasks}) => {

    return (
        <div className="card-container">
            {
                tasks.map( (task) => {
                    return <TaskCard task={task} key={task.id}/>
                })
            }    
        </div>
    )
}
