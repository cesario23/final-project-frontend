import React, { Component } from 'react'
import "./Signup.css"

export class Signup extends Component {
state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError: "",
    lastNameError: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    firstNameOnFocus: false,
    lastNameOnFocus: false,
    emailOnFocus: false,
    usernameOnFocus: false,
    passwordOnFocus: false,
    confirmPasswordOnFocus: false,

}


    handleOnChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = async (event)=>{
        event.preventDefault();

    }
    handleOnBlur = (event) =>{
     if(this.state[event.target.name].length === 0){
         this.setState ({
             [`${event.target.name}Error`]: `${event.target.placeholder} you cannot leave a space blank`
         })
     }   
    };
    handleOnFocus = (event) =>{
       if(!this.state[`${event.target.name}OnFocus`]){
           this.setState({
               [`${event.target.name}OnFocus`]: true,
           })
       } 
    };

    render() {
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
            firstNameError,
            lastNameError,
            usernameError,
            passwordError,
            emailError,
            confirmPasswordError,
        } = this.state;
        return (
            <div className="container">
                <div className="title">Sing up form</div>
                <div className= "form-container">
                    <form className ="form" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <label htmlFor="firstName">First Name</label>
                            <input
                            type="text"
                            name= "firstName"
                            value={firstName}
                            id="firstName"
                            placeholder= "first Name"
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                            {firstNameError && firstNameError}
                            </div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                            type="text"
                            value={lastName}
                            name="lastName"
                            id="lastName"
                            placeholder="last Name"
                            onBlur= {this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {lastNameError && lastNameError}
                            </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">email</label>
                            <input 
                            type="text"
                            value={email}
                            name="email"
                            id="email"
                            placeholder="email"
                            onBlur= {this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {emailError && emailError}
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="username">username</label>
                            <input
                            type="text"
                            value={username}
                            name="username"
                            id="username"
                            placeholder="username"
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {usernameError && usernameError}
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="password">password</label>
                            <input 
                            type="text"
                            value={password}
                            name="password"
                            id="password"
                            placeholder="password"
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {passwordError && passwordError}
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="confirmpassword">confirm password</label>
                            <input
                            type="text"
                            value={confirmPassword}
                            name='confirmPassword'
                            id="confirmPassword"
                            placeholder='confirmPassword'
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {confirmPasswordError && confirmPasswordError}
                            </div>
                        </div>
                        <button className="submit">Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Signup
