import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
		};
	}

	removeTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter((task) => task.id !== id),
		});
	};

	addTask = (task) => {
		this.setState({ tasks: [...this.state.tasks, task] });
	};

	toggleCompletion = (id) => {
		const isCompelted = this.state.tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});

		this.setState({ isCompelted });
	};

	render() {
		const tasks = this.state.tasks.map((task) => (
			<Todo
				key={task.id}
				id={task.id}
				taskName={task.taskTitle}
				remove={this.removeTask.bind(this, task.id)}
				toggleTodo={this.toggleCompletion}
			/>
		));
		return (
			<div>
				<NewTodoForm newTask={this.addTask} />
				{tasks}
			</div>
		);
	}
}

export default TodoList;
