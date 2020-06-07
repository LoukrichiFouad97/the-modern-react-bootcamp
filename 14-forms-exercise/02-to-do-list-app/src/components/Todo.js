import React, { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { taskTitle: this.props.taskName, isEditing: false };
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ isEditing: !this.state.isEditing });
	};

	componentDidUpdate(prevProp, prevState) {
		console.log("inside of componentDidUpdate");
		console.log(prevProp);
	}

	toggleForm = () => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	toggleTodo = () => {
		this.props.toggleTodo(this.props.id);
	};

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<form>
					<input
						type="text"
						value={this.state.taskTitle}
						name="taskTitle"
						onChange={this.handleChange}
					/>
					<div className="btn btn-warning btn-sm" onClick={this.handleSubmit}>
						Save
					</div>
				</form>
			);
		} else {
			result = (
				<div
					className={`row bg-light mt-2 p-1 text-dark ${
						this.props.completed && "bg-success"
					}`}
				>
					<h4 className="m-1" onClick={this.toggleTodo}>
						{this.state.taskTitle}
					</h4>
					<button className="btn close ml-auto mr-1 text-sucess">
						<svg
							id="i-checkmark"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="32"
							height="32"
							fill="none"
							stroke="currentcolor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path d="M2 20 L12 28 30 4" />
						</svg>
					</button>
					<button
						onClick={this.toggleForm}
						className="btn close  mr-1 text-info"
					>
						<svg
							id="i-settings"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="32"
							height="32"
							fill="none"
							stroke="currentcolor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
							<circle cx="16" cy="16" r="4" />
						</svg>
					</button>
					<button
						onClick={this.props.remove}
						className="btn close mr-1 text-danger"
					>
						<svg
							id="i-ban"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="32"
							height="32"
							fill="none"
							stroke="currentcolor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<circle cx="16" cy="16" r="14" />
							<path d="M6 6 L26 26" />
						</svg>
					</button>
				</div>
			);
		}

		return <div>{result}</div>;
	}
}

export default Todo;
