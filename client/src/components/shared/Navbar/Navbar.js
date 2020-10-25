import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <div>
            <header>
                <ul className="nav">
                    <Link to='/'>
                        <span><i className="fas fa-book"></i></span>
                        <li>Todo Notes</li>
                    </Link>

                    <div>
                        <li className="title"><NavLink activeClassName="active" exact to='/projects'>Projects</NavLink> </li>
                        <li className="title"><NavLink activeClassName="active" exact to='/tasks'>Tasks</NavLink> </li>
                        <label className="dropdown">
                            <div className="dd-button">
                                <span><i className="fas fa-ellipsis-h"></i></span>
                            </div>

                            <input type="checkbox" className="dd-input" id="test"></input>

                            <ul className="dd-menu">
                                <li>Export</li>
                                <li>Profile</li>
                                <li className="divider"></li>
                                <li>Switch</li>
                            </ul>
                        </label>
                    </div>
                </ul>
            </header>
        </div>
    )
}