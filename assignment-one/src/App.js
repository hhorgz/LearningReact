import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';
import './UserOutput/UserOutput.css';

class App extends Component {

	state = {
		username: 'hhorgz'
	}

	usernameChangeHandler = (event) => {
		this.setState({
			username: event.target.value
		});
	}

	render() {

		const inputStyle = {
			backgroundColor: '#3CBC8D',
			color: 'white',
			borderRadius: '4px',
			width: '100%',
			boxSizing: 'border-box',
			padding: '12px 20px',
			margin: '8px'
		}

		return(
			<div className="App">
				<UserInput 
					username={this.state.username} 
					changed={this.usernameChangeHandler}
					inputStyle={inputStyle}></UserInput>
				<UserOutput username={this.state.username}></UserOutput>
				<UserOutput username={this.state.username}></UserOutput>
				<UserOutput username={this.state.username}></UserOutput>
			</div>
		);
	}
}

export default App;
