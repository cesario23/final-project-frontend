import React, { Component } from 'react'

export class Signup extends Component {
    state({
        
    })



    handleOnChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = async (event)=>{
        event.preventDefault();

        } 

    render() {
        return (
            <div className="container">
                <div className="title">Sing up form</div>
                <div className= "form-container">
                    <form className ="form" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <label htmlFor="firstName">First Name</label>
                            <input></input>
                            <label htmlFor="lastName">Last Name</label>
                            <input></input>
                        </div>
                        <div className="email">
                            <label htmlFor="email">email</label>
                            <input></input>
                        </div>
                        <div className="row">
                            <label htmlFor="username">username</label>
                            <input></input>
                        </div>
                        <div className="row">
                            <label htmlFor="password">password</label>
                            <input></input>
                        </div>
                        <div className="row">
                            <label htmlFor="comfirmpasswor">comfirmpasswor</label>
                            <input></input>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Signup
