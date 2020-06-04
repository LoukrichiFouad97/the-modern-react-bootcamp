import React, { Component } from "react";
import uuid from "uuid";

class BoxListForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: "", width: "", bgColor: "" };
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newBox = { ...this.state, id: uuid() };
		this.props.create(newBox);
		this.setState({ height: "", width: "", bgColor: "" });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<form className="col-6 offset-3" onSubmit={this.handleSubmit}>
					<div className="row">
						<input
							id="height"
							name="height"
							placeholder="height"
							value={this.state.height}
							onChange={this.handleChange}
						/>
					</div>
					<div className="row">
						<input
							id="width"
							name="width"
							placeholder="width"
							value={this.state.width}
							onChange={this.handleChange}
						/>
					</div>
					<div className="row">
						<input
							id="color"
							name="bgColor"
							placeholder="color"
							value={this.state.bgColor}
							onChange={this.handleChange}
						/>
					</div>
					<button className="btn btn-success col-7">Add Box!</button>
				</form>
			</div>
		);
	}
}

export default BoxListForm;
