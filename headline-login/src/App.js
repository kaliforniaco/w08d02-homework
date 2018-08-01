import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer'

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }

login = (username) => {
  this.setState({
    username: username,
    logged: true
  });
  
  console.log('login function in app is working for', username)
}
  render() {
    console.log(this.state, 'inside of app component')
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">News Headlines</h1>
        </header>
      
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} /> }
      
        
      </div>
    );
  }
}

export default App;