import React, { useState } from "react";

function UseToogler(initValue = false) {
	const [state, setState] = useState(initValue);
	const toggleState = () => {
		setState(!state);
	};
	return [state, toggleState];
}

export default UseToogler;
