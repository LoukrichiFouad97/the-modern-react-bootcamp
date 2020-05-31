import React, { Component } from "react";

class RandomNumber extends Component {
	constructor(props) {
		super(props);
		this.state = { randNumber: 0 };
		this.rollNumber = this.rollNumber.bind(this);
	}

	checkWinner(num) {
		let win;
		if (num === 7) {
			win = <h1>YOU WIN!</h1>;
		}
		return win;
	}

	rollNumber() {
		let ran = Math.floor(Math.random() * 10 + 1);
		this.setState({ randNumber: ran });
	}

	render() {
		return (
			<div>
				<h1>Number is: {this.state.randNumber}</h1>
        
				{/* <button onClick={this.rollNumber}>Roll</button> */}
				{/* {this.checkWinner(this.state.randNumber)} */}

				{this.state.randNumber === 7 ? (
					<h2>YOU WIN!</h2>
				) : (
					<button onClick={this.rollNumber}>Roll</button>
				)}
			</div>
		);
	}
}

export default RandomNumber;
