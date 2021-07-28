import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav'
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import React from 'react';

function App() {
  return (
    <Router >
      <ToastContainer />
     <Nav />
     <React.Fragment>
       <Route exact path= "/sign-up" component ={Signup}/>
       <Route exact path= "/Login" component= {Login }/>
       <Route exact path= "/" component = {Home}/>
     </React.Fragment>
     </Router>
  );
}

export default App;
