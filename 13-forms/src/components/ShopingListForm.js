import React, { Component } from "react";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", qty: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addItem(this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name"></label>
					<input
						type="text"
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<label htmlFor="qty"></label>
					<input
						type="text"
						name="qty"
						id="qty"
						value={this.state.qty}
						onChange={this.handleChange}
					/>
					<button>add item</button>
				</form>
			</div>
		);
	}
}

export default ShoppingListForm;
