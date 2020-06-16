import React from "react";
import UseToggler from "./hooks/useToggler";

function Toggler() {
	const [isHappy, setIsHappy] = UseToggler(false);
	return (
		<div>
			<button onClick={setIsHappy}>{isHappy ? ":)" : ":("}</button>
		</div>
	);
}

export default Toggler;
