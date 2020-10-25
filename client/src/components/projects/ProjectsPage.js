import React from 'react'
import { Projects } from './Projects';
import { MenuProject } from './MenuProject';
// import {propTypes} from 'prop-types';

export const ProjectsPage = (projects) => {
    return (
        <div>
            <div className="container">
                
                <MenuProject/>

                <Projects/>
            </div>
        </div>
    )
}


// Projects.protoTypes = {
//     projects: propTypes.arrayOf(propTypes.shape({
//         name: propTypes.string,
//     }))
//     // onDelete: propTypes.func,
// }

// Projects.defaultProps = {
//     projects: []
// }