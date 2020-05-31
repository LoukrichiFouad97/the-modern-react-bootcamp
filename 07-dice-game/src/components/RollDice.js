import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { die1: "five", die2: "two", isRolling: false };
		this.roll = this.roll.bind(this);
	}

	static defaultProps = {
		dieNumber: ["one", "two", "three", "four", "five", "six"],
	};

	roll() {
		let randNum = Math.floor(Math.random() * this.props.dieNumber.length);
		let randNum2 = Math.floor(Math.random() * this.props.dieNumber.length);
		this.setState({
			die1: this.props.dieNumber[randNum],
			die2: this.props.dieNumber[randNum2],
		});
		this.setState({ isRolling: true });
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 1000);
	}

	render() {
		return (
			<div className="RollDice">
				<div className="dice">
					<Die dieNum={this.state.die1} rollingState={this.state.isRolling} />
					<Die dieNum={this.state.die2} rollingState={this.state.isRolling} />
				</div>
				<button
					onClick={this.roll}
					className="RollDice-btn"
					disabled={this.state.isRolling}
				>
					{this.state.isRolling ? "Rolling..." : "Roll Dice"}
				</button>
			</div>
		);
	}
}

export default RollDice;
