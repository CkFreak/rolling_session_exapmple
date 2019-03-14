import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			response: ""
		}
	}

	login() {
		axios.get("http://localhost:3001/login", {withCredentials: true})
			.then(result => {
				this.setState({response: result.data.session});
			}).catch(err => {
				this.setState({response: err.response ? "Error Code: " + err.response.status : "Error Occurred"});
		});
	}

	logout() {
		axios.get("http://localhost:3001/logout", {withCredentials: true})
			.then(result => {
				this.setState({response: result.data.session});
			}).catch(err => {
			console.log(err);
			this.setState({response: err.response ? "Error Code: " + err.response.status : "Error Occurred"});
		});
	}

	render() {
		return (
			<div className="App">
				<button style={{margin: "0 5px 0 5px"}} onClick={() => this.login()}>Login</button>
				<button style={{margin: "0 5px 0 5px"}} onClick={() => this.logout()}>Logout</button><br/><br/>
				<span>{this.state.response}</span>
			</div>
		);
	}
}

export default App;
