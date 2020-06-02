import React, { Component } from "react";
import "./box.css";

function random(arr) {
	let ran = Math.floor(Math.random() * arr.length);
	return arr[ran];
}

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = { color: random(this.props.bgColor) };
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		this.setState({ color: random(this.props.bgColor) });
	}

	render() {
		const styles = { backgroundColor: this.state.color };
		return (
			<div style={styles} className="box" onClick={this.changeColor}>
				{this.state.color}
			</div>
		);
	}
}
export default Box;
