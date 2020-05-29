import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./css";

class App extends Component {
	render() {
		return (
			<div>
				<img src={logo} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
