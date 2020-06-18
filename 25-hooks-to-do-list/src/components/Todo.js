import React from "react";
import UseToggler from "./Hooks/useToggleHook";
import uuid from "uuid";

function Todo({ taskTitle, removeTask, todo, id, editTodo }) {
	const [isEdit, setIsEdit] = UseToggler(true);
	const toggleEdit = () => {
		setIsEdit(!isEdit);
		editTodo(id, );
	};
	return (
		<div>
			{isEdit ? (
				<div className="input-group mb-3">
					<input type="text" className="form-control" value={taskTitle} />
					<div className="input-group-append">
						<button
							className="btn btn-success input-group-text"
							id="basic-addon2"
							onClick={toggleEdit}
						>
							Save
						</button>
					</div>
				</div>
			) : (
				<>
					<li className="list-group-item row d-flex" key={uuid()}>
						{taskTitle}
						<div className="ml-auto icon-container">
							<i
								style={{ cursor: "pointer" }}
								className="ml-1 fas fa-check text-success"
							></i>
							<i
								style={{ cursor: "pointer" }}
								className="ml-1 fas fa-cog text-primary"
								onClick={() => setIsEdit()}
							></i>
							<i
								onClick={() => removeTask(todo)}
								style={{ cursor: "pointer" }}
								className="ml-1 fas fa-trash-alt text-danger"
							></i>
						</div>
					</li>
				</>
			)}
		</div>
	);
}
export default Todo;
