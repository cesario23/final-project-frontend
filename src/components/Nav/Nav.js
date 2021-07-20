import React, { Component } from 'react'
import "./Nav.css"
import {Link, NavLink} from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <nav>
            <div className="header">
            <h1>
                <Link activeStile={{fontSize: '15px'}} to="/">Home</Link>
            </h1>
            <div className="right-side-list">
                <ul>
                    <li>
                      <NavLink activeStyle= {{borderButton: "1px solid white"}} to="/sign-up">Signup</NavLink>
                    </li>
                    <li>
                     <NavLink activeStyle={{borderButton: "1px solid white"}} to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
                
            </div>
            </nav>
        )
    }
}

export default Nav
