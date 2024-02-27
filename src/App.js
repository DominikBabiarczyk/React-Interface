import logo from './logo.svg';
import './App.css';
import StartWidnow from './WindowStart/StartWindow';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes, Link} from 'react-router-dom';
import Main from './Main/main';
import { useState } from 'react';



class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        users: [],
        nameLoggedUser : "",
      }
  }


  handleLoginSuccessful = (name) => {
    this.setState(() => ({nameLoggedUser:name,
    }));
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/users/all")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      this.setState({users})
    }
    );
  }

  render() {
    
    return (

        <div>

        {this.state.nameLoggedUser === "" ? (
          <StartWidnow users = {this.state.users} handleLoginSuccessful = {this.handleLoginSuccessful}/>
        ):(
          <Main users={this.state.users} userName={this.state.nameLoggedUser}/>
        )}
        
        </div>
          
    );
  }
  
}

export default App;

