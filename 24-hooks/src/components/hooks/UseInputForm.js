import { useState } from "react";

export default (initValue) => {
	const [state, setState] = useState(initValue);

	const updateState = (e) => {
		setState(e.target.value);
	};

	const reset = () => {
		setState("");
	};

	return [state, updateState, reset];
};
