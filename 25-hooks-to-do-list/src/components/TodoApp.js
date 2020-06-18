import React, { useState } from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

function TodoApp() {
	const [todos, setTodos] = useState([
		{ id: 1, name: "do smth", isEdit: false },
	]);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const delTodo = (todo) => {
		setTodos([...todos.filter((td) => td !== todo)]);
	};

	const editTodo = (id, newTask) => {
		const updatedTodo = todos.map((todo) =>
			todo.id === id ? { ...todo, name: newTask } : todo
		);
		setTodos(updatedTodo);
	};

	return (
		<div className="container border border-black py-2">
			<h1 className="display-4 text-center my-3">Todo List App</h1>
			<div className="row">
				<NewTodoForm addTask={addTodo} />
			</div>
			<div className="row">
				{
					<TodoList
						todoList={todos}
						removeTask={delTodo}
						taskTitle={todos.name}
						editTodo={editTodo}
					/>
				}
			</div>
		</div>
	);
}

export default TodoApp;
