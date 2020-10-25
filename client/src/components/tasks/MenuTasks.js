import React from 'react'
import { InputSearch } from '../shared/InputSearch/InputSearch';
import { InputSearchFull } from '../shared/InputSearchFull/InputSearchFull';

export const MenuTasks = () => {
    return (
        <div>
            <div className="menu">
                <div>
                    <InputSearch/>
                </div>
                <div>

                    <label className="dropdown">

                        <div className="dd-button">
                            <span><i className="fas fa-filter"></i>Filter by</span>
                        </div>

                        <input type="checkbox" className="dd-input" id="test"></input>

                        <ul className="dd-menu">
                            <li>Priority</li>
                            <li>Status</li>
                            <li className="divider"></li>
                        </ul>
                    </label>

                    <label className="dropdown">

                        <div className="dd-button">
                            <span><i className="fas fa-sort-alpha-up"></i>Sort</span>
                        </div>

                        <input type="checkbox" className="dd-input" id="test"></input>

                        <ul className="dd-menu">
                            <li>Name</li>
                            <li>Date</li>
                            <li className="divider"></li>
                        </ul>
                    </label>
                    <a className="btn btn-primary rounded" id="btn-add"><span><i className="fas fa-plus-circle"></i></span> Add Project</a>
                </div>
            </div>
        </div>
    )
}
