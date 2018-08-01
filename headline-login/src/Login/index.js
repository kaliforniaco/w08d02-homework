import React, { Component } from 'react';
// {Component} ES6 Destructuring <--
// now we have a componenet in a variable
// otherwise we'd have to do React.Component

class Login extends Component {
	constructor(){
		// calling SUPER lets you use this inside the constructor
		super();

		this.state = {
			username: '',
			password: ''
	}
}

	handleChange = (e) => {
		// arrow functions BIND and allow you to use THIS
		// which you will have to for this.setState

		// ES6 Computed Properties
		this.setState({[e.target.name]: e.target.value});

		// var someObject = {}
		// someObject[username] = e.target.username
}

	
	handleSubmit = (e) => {
		e.preventDefault();

		// we are calling rhe login function that we created in
		// App.js, and we sent down as props in order to lift our state
		this.props.login(this.state.username)
		
	}
	render(){
		console.log(this.state, 'this.state')
		return ( 								// set the VALUE of the input with STATE
			<form class="loginform" onSubmit={this.handleSubmit}> 
				<input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username'/>
				<input type='password' name='password' onChange={this.handleChange} value={this.state.passowrd} placeholder='password'/> 
				<input type='submit' value='Submit'/>
			</form>
		)
		
	}
}

export default Login;
