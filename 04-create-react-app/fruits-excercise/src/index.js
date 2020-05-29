import React, { Component } from "react";
import ReactDOM from "react-dom";
import fruits from "./foods";
import { choice, remove } from "./helpers";

class App extends Component {
	render() {
		const fruitChoise = choice(fruits);
		const removeFruit = remove(fruits, fruitChoise);
		return (
			<div>
				<p>I'would like one {fruitChoise} please</p>
				<p>here you go {fruitChoise}</p>
				<p>Delicious may i have another</p>
				<p>We have other {removeFruit.length} foods left</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
