import React from "react";
import uuid from "uuid";
import Todo from "./Todo";

function TodoList(props) {
	return (
		<div className="col">
			<ul className="list-group">
				{props.todoList.map((todo) => (
					<Todo
						todo={todo}
						key={todo.id}
						id={todo.id}
						removeTask={props.removeTask}
						taskTitle={todo.name}
						editTodo={props.editTodo}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
