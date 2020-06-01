import React, { Component } from "react";
import Lottery from "./components/Lottery";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Lotto",
			numBalls: 6,
			max: 40,
		};
	}
	render() {
		const { title, numBalls, max } = this.state;
		return (
			<div>
				<Lottery title="lotto" numBalls={4} max={10} />
				<Lottery title={title} numBalls={numBalls} max={max} />
			</div>
		);
	}
}

export default App;
