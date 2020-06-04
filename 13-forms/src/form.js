import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", passwd: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		this.setState({ name: "", email: "", passwd: "" });
	}

	handleClick(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={this.handleClick}
						value={this.state.name}
					/>
					<label htmlFor="email">email</label>
					<input
						type="text"
						id="email"
						name="email"
						onChange={this.handleClick}
						value={this.state.email}
					/>
					<label htmlFor="passwd">passwd</label>
					<input
						type="text"
						id="passwd"
						name="passwd"
						onChange={this.handleClick}
						value={this.state.passwd}
					/>
					<button onClick={this.handleClick}>click me!</button>
				</form>
			</div>
		);
	}
}

export default Form;
