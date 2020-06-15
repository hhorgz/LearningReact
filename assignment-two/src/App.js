import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

import './App.css';

class App extends Component {

	state = {
		text: ''
	}

	textChangedHandler = (event) => {
		this.setState({ text: event.target.value });
	}

	deleteLetterHandler = (letterIndex) => {
		let newLettersArray = this.state.text.split('');
		newLettersArray.splice(letterIndex, 1);

		this.setState({ text: newLettersArray.join('') });
	}

	render() {

		let letters = this.state.text.split('').map((letter, index) => {
			return (
				<CharComponent
					letter={letter}
					key={index}
					click={() => this.deleteLetterHandler(index)} 
				/>
			);
		});

		return (
			<div className="App">
				<h1>Assignment Two</h1>
				<input type='text' onChange={this.textChangedHandler} value={this.state.text}></input>
				<p>Text length: {this.state.text.length}</p>
				<ValidationComponent textLength={this.state.text.length}></ValidationComponent>
				{letters}
			</div>
		);
	}
}

export default App;
