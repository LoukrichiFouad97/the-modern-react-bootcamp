import React, { useState } from "react";

function HookCounter() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<h1>Hook Counter</h1>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
		</div>
	);
}

export default HookCounter;
