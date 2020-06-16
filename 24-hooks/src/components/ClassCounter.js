import React, { Component } from "react";

class ClassCounter extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}
	updateCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
	render() {
		return (
			<div>
				<h1>Class Counter</h1>
				<p>{this.state.counter}</p>
				<button onClick={this.updateCounter}>+1</button>
			</div>
		);
	}
}

export default ClassCounter;
