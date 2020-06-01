import React, { Component } from "react";

class Score extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
		};
		this.addOne = this.addOne.bind(this);
		this.addThree = this.addThree.bind(this);
	}

	addOne() {
		this.setState((currState) => {
			return { score: currState.score + 1 };
		});
		// this.setState({ score: this.state.score + 1 });
	}

	// Abstract State Update
	increment(curState) {
		return { score: curState.score + 10 };
	}

	addThree() {
		this.setState(this.increment);
		this.setState(this.increment);
		this.setState(this.increment);
	}

	// Callback from
	// addThree() {
	// 	this.setState((curState) => {
	// 		return { score: curState.score + 10 };
	// 	});
	// 	this.setState((curState) => {
	// 		return { score: curState.score + 20 };
	// 	});
	// 	this.setState((curState) => {
	// 		return { score: curState.score + 30 };
	// 	});
	// }

	render() {
		return (
			<div>
				<h1>{this.state.score}</h1>
				<button onClick={this.addOne}>add +1</button>
				<button onClick={this.addThree}>add +3</button>
			</div>
		);
	}
}

export default Score;
