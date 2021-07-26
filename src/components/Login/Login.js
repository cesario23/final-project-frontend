import React, { Component } from 'react'

export class Login extends Component {
    state={
        username: "",
        password: "",
        usernameError: "",
        passwordError: "",
        onFocus: false,
    };

    handleOnChange = (event) =>{
        this.setState ({
            [event.target.name]: event.target.value,
        })
        if(event.target.name === "username"){
            if(this.state.email.length === 0){
                this.setState ({
                    usernameError: "username can not be empty"
                });
            }else{
                this.setState({
                    usernameError: ""
                })
            }
        };
    };
    handleOnSubmit= (event) =>{
        event.preventDefault();
    };
    handleOnBlur = (event) =>{
        if(this.state[event.target.name].length === 0){
            this.setState ({
                [`${event.target.name}Error`]: `${event.target.placeholder} cannot be empty`
            })
        }
    };
    render() {
        const {
            username,
            password,
            usernameError,
            passwordError,
        } = this.state
       
        return (
            <div className="container">
                <div className="div-form">
                    <form className= "form" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <label htmlFor="username">username</label>
                            <input
                            type="text"
                            name="username"
                            value={username}
                            id="username"
                            placeholder="username"
                            onBlur={this.handleOnBlur}
                            />
                            <div className="errorMessage">
                                {usernameError && usernameError}
                            </div>
                        </div>
                        <div classname="row">
                            <label htmlFor="password">password</label>
                            <input
                            type="text"
                            name='password'
                            value={password}
                            id="password"
                            placeholder="password"
                            onBlur={this.handleOnBlur}
                            />
                            <div className='errorMessage'>
                                {passwordError && passwordError}
                            </div>
                        </div>
                        <button className="button">Submit</button>

                    </form>
                </div>

            </div>
        )
    }
}

export default Login
