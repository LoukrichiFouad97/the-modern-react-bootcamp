import React, { Component } from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
	static defaultProps = {
		title: "Lotto",
		numBalls: 6,
		max: 40,
	};

	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numBalls }) };
		this.generate = this.generate.bind(this);
	}

	generate() {
		this.state.nums.forEach((num) => {
			this.setState((curState) => {
				return {
					nums: curState.nums.map((n) => {
						return Math.floor(Math.random() * this.props.max) + 1;
					}),
				};
			});
		});
	}

	render() {
		return (
			<div className="Lottery-container">
				<h2>{this.props.title}</h2>
				<div>
					{this.state.nums.map((n) => (
						<LotteryBall num={n} />
					))}
				</div>
				<div onClick={this.generate} className="btn btn-info">
					Generate
				</div>
			</div>
		);
	}
}

export default Lottery;
