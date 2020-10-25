import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export const ProjectItem = ({project}) => {
    return (
        <div>
            <Link to={`./projects/${project.id}/tasks`}>
                <div className="card">
                    <div className="flex-between">
                        <div className="card-title">
                            {project.name}
                        </div>
                        <div>
                            <i id="delete" className="text-red fas fa-trash"></i>
                        </div>
                    </div>
                    <div className="card-date">
                        {project.date}
                    </div>
                </div>
            </Link>
        </div>
    )
}
