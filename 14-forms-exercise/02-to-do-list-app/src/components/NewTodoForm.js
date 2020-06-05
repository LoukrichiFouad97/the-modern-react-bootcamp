import React, { Component } from "react";
import uuid from "uuid";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { taskTitle: "" };
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.newTask({ ...this.state, id: uuid(), completed: false });
		this.setState({ taskTitle: "" });
	};

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="bg-light p-2">
				<div className="row justify-content-center">
					<h1>To Do List App</h1>
				</div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="col-6 offset-2"
						type="text"
						placeholder="New Todo"
						id="task"
						name="taskTitle"
						value={this.state.taskTitle}
						onChange={this.changeHandler}
					/>
					<button className="col-2 btn btn-info btn-sm">Add Task</button>
				</form>
			</div>
		);
	}
}

export default NewTodoForm;
