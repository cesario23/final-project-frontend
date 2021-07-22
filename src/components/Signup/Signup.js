import React, { Component } from 'react'
import {isAlpha, isAlphanumeric, isEmail, isStrongPassword } from 'validator'
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
    usernameOnFocus: false,
    emailOnFocus: false,
    passwordOnFocus:false,
    confirmPasswordOnFocus: false,
    isButtonDisabled: true,

};

    handleOnChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        },
        () => {
            if(event.target.name === "firstName" ||
               event.target.name === "lastName"){
                   this.handleFirstNameAndLastNameInput (event);
               }
            if(event.target.name === "email"){
                this.handleEmail();
            }  
            if(event.target.name === "password"){
                this.handlePassword();
            }
            if(event.target.name === "confirmPassword"){
                this.handleConfirmPassword ();
            }
        }
        )
    };

    handlePassword = () => {
        if(this.state.confirmPasswordOnFocus){
            if(this.state.password !== this.state.confirmPassword){
                this.setState({
                confirmPasswordError: "Password does not match",
                isButtonDisabled: true,
                })
            }else {
                this.setState({
                    confirmPasswordError: "",
                })
            }
        }
        if(this.state.password.length > 0){
            if(isStrongPassword(this.state.password)){
                this.setState({
                    passwordError: "",
                })
            }else {
                this.setState({
                    passwordError: "Password does not meet complexity requirements ",
                    isButtonDisabled: true,
                })
            }
        }else {
            this.setState({
                passwordError: "Password cannot be empty",
                isButtonDisabled: true,
            })
        }
    };

    handleConfirmPassword = ()=>{
        if(this.state.password !== this.state.confirmPassword){
            this.setState({
                confirmPasswordError: "Password does not match!"
            })
        }else{
            this.setState({
                confirmPasswordError: "",
                isButtonDisabled: false,
            })
        }
    };

    handleEmail = ()=>{
        if(this.state.email.length > 0){
            if(isEmail(this.state.email)){
                this.setState({
                    emailError: ""
            })
        }else {
            this.setState({
                emailError: "Please, enter a valid email!",
                isButtonDisabled: true,
            })
        }
        }else{
            this.setState({
                emailError:"Email cannot be empty",
                isButtonDisabled: true,
            })
        }
    };

    handleUsername = () => {
        if(this.state.username > 0){
            if(isAlphanumeric(this.state.username)){
                this.setState({
                    usernameError: ""
                })
            }else{
                this.setState({
                    usernameError: "username can only have alphabet and numbers",
                    isButtonDisabled: true,
                })
            }
        }else{
            this.setState({
                usernameError: "username cannot be empty",
                isButtonDisabled: true,
            })
        }
    };

    handleFirstNameAndLastNameInput = (event) => {
        if(this.state[event.target.name].length > 0){
            if(isAlpha(this.state[event.target.name])){
                this.setState({
                 [`${event.target.name}Error`]: "",
                 isButtonDisabled: false,
                })
            }else{
                this.setState({
                [`${event.target.name}Error`]: `${event.target.placeholder} can only use letters`,
                isButtonDisabled: true,
                })
            }
        }else{
            this.setState({
                [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`,
                isButtonDisabled: true,
            })
        }
    };

    handleOnSubmit = async (event)=>{
        event.preventDefault();

    }
    handleOnBlur = (event) =>{
     if(this.state[event.target.name].length === 0){
         this.setState ({
             [`${event.target.name}Error`]: `${event.target.placeholder} you cannot leave a space blank`,
             isButtonDisabled: true,
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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isButtonDisabled === true){
        if(
            this.state.firstNameOnFocus &&
            this.state.lastNameOnFocus &&
            this.state.usernameOnFocus &&
            this.state.emailOnFocus &&
            this.state.passwordOnFocus &&
            this.state.confirmPasswordOnFocus

        ){
        if(
            this.state.firstNameError.length === 0 &&
            this.state.lastNameError.length === 0 &&
            this.state.usernameError.length === 0 &&
            this.state.emailError.length === 0 &&
            this.state.passwordError.length === 0 &&
            this.state.confirmPasswordError.length === 0 &&
            this.state.password === this.state.confirmPassword
        ) {
            this.setState({
               isButtonDisabled: false, 
            })
        }
    }
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
                            onChange= {this.handleOnChange}
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
                            onChange= {this.handleOnChange}
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
                            onChange= {this.handleOnChange}
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
                            onChange= {this.handleOnChange}
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
                            onChange={this.handleOnChange}
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
                            onChange={this.handleOnChange}
                            onBlur={this.handleOnBlur}
                            onFocus={this.handleOnFocus}
                            />
                            <div className="errorMessage">
                                {confirmPasswordError && confirmPasswordError}
                            </div>
                        </div>
                        <button type="submit" disabled={this.state.isButtonDisabled}>Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Signup
