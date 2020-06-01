import React, { Component } from "react";

class AddName extends Component {
	static defaultProps = {
		names: ["fouad", "mohamed", "salah", "youcef", "rasha", "adam"],
	};

	constructor(props) {
		super(props);
		this.state = { names: [] };
		this.addName = this.addName.bind(this);
	}

	addName() {
		let randomNum = Math.floor(Math.random() * this.props.names.length);
		let randomName = this.props.names[randomNum];
		// Good way the update state of Data Structure
		this.setState({ names: [...this.state.names, randomName] });
	}

	render() {
		return (
			<div>
				<h1>{this.state.names}</h1>
				<button className="btn btn-info" onClick={this.addName}>
					add name
				</button>
			</div>
		);
	}
}

export default AddName;
