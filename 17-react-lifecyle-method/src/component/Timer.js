import React, { Component } from "react";

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date() };
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	}

	render() {
		return (
			<div>
				<h3>{this.state.time.getSeconds()}</h3>
			</div>
		);
	}
}

export default Timer;
