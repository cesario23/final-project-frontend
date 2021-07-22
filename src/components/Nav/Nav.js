import React, { Component } from 'react'
import "./Nav.css"
import { NavLink} from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <nav>
            <div className="header">
            <h1>
                <NavLink activeStile={{borderBottom: "1px solid white"}} to="/">Home</NavLink>
            </h1>
            </div>
            <div className="right-side-list">
                <ul>
                    <li>
                      <NavLink activeStyle= {{borderBottom: "1px solid white"}} to="/sign-up">Signup</NavLink>
                    </li>
                    <li>
                     <NavLink activeStyle={{borderBottom: "1px solid white"}} to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Nav
