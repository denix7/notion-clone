import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../../actions/task';
import { deleteTask } from '../../actions/task';

export const CreateTask = () => {

    const tasks = useSelector( (state => state.task));
    const dispatch = useDispatch();

    
    const save = (e) => {
        e.preventDefault();
        console.log(e.target.task.value);
        dispatch(addTask(e.target.task.value))
    }

    const remove = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <form onSubmit={(e) => {save(e)}}>
                <input type="text" name='task' placeholder="New task"></input>
                <button>Save</button>
            </form>

            <div>
                <ul>
                    {
                        tasks.map((task) => {
                            return <li key={task.id}>{task.value} <button onClick={() => remove(task.id)}>Delete</button></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
