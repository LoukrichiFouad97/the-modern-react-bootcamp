import React, { useState } from "react";
import uuid from "uuid";
import useInputState from "./Hooks/useInputState";

export default function NewTodoForm(props) {
	const [taskName, setTaskname, reset] = useInputState("");
	const handleSubmit = () => {
		props.addTask({ id: uuid(), name: taskName, isComplete: false });
		reset();
	};

	return (
		<div className="col">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="New Todo"
					value={taskName}
					onChange={setTaskname}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-info input-group-text"
						id="basic-addon2"
						onClick={handleSubmit}
					>
						Add Todo
					</button>
				</div>
			</div>
		</div>
	);
}
