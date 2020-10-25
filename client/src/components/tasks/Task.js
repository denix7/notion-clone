import React from 'react'
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../selectors/getTaskById';

export const Task = () => {
    const {taskId} = useParams();

    const task = getTaskById(taskId);

    return (
        <div className="task-info">
            <div className="content" id="content-description-task">
                <div className="modal-header">
                    <div>
                        <h2>{task.name}</h2>
                        <input className="input-edit" id="input-description" type="text" value="{task.name}"></input>
            </div>

                    </div>
                    <div className="modal-body">
                        <div className="modal-item">
                            <div className="item-property">
                                <span><i className="fas fa-clock"></i></span>
                                Created
                </div>
                            <div className="item-value">{task.created_at}</div>
                        </div>
                        <div className="modal-item">
                            <div className="item-property">
                                <span><i className="fas fa-th-list"></i></span>
                                Status
                </div>
                            <div className="item-value">
                                <select id="status">
                                    <option selected>{task.status}</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-item">
                            <div className="item-property">
                                <span><i className="fas fa-clock"></i></span>
                                Priority
                </div>
                            <div>
                                <select id="priority">
                                    <option selected>{task.priority}</option>
                                </select>
                            </div>
                        </div>
                        <div id="tags-container">

                        </div>
                        <div className="modal-item">
                            <div className="item-property">
                                <span><i className="fas fa-calendar"></i></span>
                                Due
                </div>
                            <input type="date" id="input-date" className="item-value input-edit" value={task.due}></input>
                        </div>
                        <button type="submit" id="btn-update-task" className="btn btn-primary rounded py-3">Update</button>
                    </div>
                </div>
            </div>
            )
        }
