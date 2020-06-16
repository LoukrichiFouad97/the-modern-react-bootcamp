import React, { useState } from "react";
import UseInputForm from "./UseInputForm";

function HooksForm() {
	const [email, setEmail, submit] = UseInputForm("");
	return (
		<div>
			<h1>Value of the input is: {email}</h1>
			<input
				type="text"
				value={email}
				onChange={setEmail}
			/>
			<button onClick={submit}>submit</button>
		</div>
	);
}

export default HooksForm;
