import { useState } from "react";

export default (init) => {
	const [state, setState] = useState("");

	const handleChange = (e) => {
		setState(e.target.value);
	};

	const reset = () => {
		setState("");
	};

	return [state, handleChange, reset];
};
