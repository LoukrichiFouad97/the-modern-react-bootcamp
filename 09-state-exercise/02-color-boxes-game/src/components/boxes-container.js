import React, { Component } from "react";
import Box from "./box";
import "./boxes-container.css";

function random(arr) {
	let ran = Math.floor(Math.random() * arr.length);
	return arr[ran];
}

class BoxContainer extends Component {
	static defaultProps = {
		colors: [
			"violet",
			"yellow",
			"green",
			"purple",
			"magenta",
			"darkgreen",
			"tomato",
		],
		numBoxes: 15,
	};

	constructor(props) {
		super(props);
		this.state = {
			color: random(this.props.colors),
		};
	}

	render() {
		const boxes = Array.from({length: this.props.numBoxes}).map(() => {
			return <Box bgColor={this.props.colors} chgColor={this.state.color} />;
		})
		return (
			<div className="boxContainer">
				{boxes}
			</div>
		);
	}
}

export default BoxContainer;
