import React, { Component } from 'react'
import "./Nav.css"
import { NavLink} from 'react-router-dom'
export class Nav extends Component {
    state = {
        search: "",
    }

    handleOnChange = ()=> {

    }
    render() {
    const {search} = this.state
        return (
            <nav>
            <div className="header">
            <h1>
                <NavLink activeStile={{borderBottom: "1px solid white"}} to="/">Home</NavLink>
            </h1>
            </div>
            <div className="search-box">
                <input
                type= "text"
                name= "search"
                id= "search"
                value= {search}
                onChange= {this.handleOnChange}
                />
                <button className = "button">
                    <img src="../../../images/search-26227.png" alt= "img"/>
                </button>
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
