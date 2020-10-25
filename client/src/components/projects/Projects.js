import React from 'react'
import { ProjectItem } from './ProjectItem';
import data from '../../data/projectsData';

export const Projects = () => {

    return (
        <div className="card-container" id="projects">
            {
                data.map( (project)=> {
                    return <ProjectItem key={project.id} project={project}/>
                })
            }
        </div>
    )
}
