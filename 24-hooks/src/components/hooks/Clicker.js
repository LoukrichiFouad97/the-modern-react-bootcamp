import React, { useState, useEffect } from "react";
import axios from "axios";
// https://swapi.co/api/films/2

export default () => {
	const [time, setTimer] = useState("");
	const [req, setReq] = useState(0);
	const updateTimer = () => {
		setTimer(time + 1);
	};
	const updateReq = () => {
		setReq(req + 1);
	};
	useEffect(() => {
		async function reqFilms() {
			const film = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			console.log(film.data);
		}
		reqFilms();
	}, [req]);
	return (
		<div>
			<button onClick={updateTimer}>click</button>
			<button onClick={updateReq}>Request Again</button>
		</div>
	);
};
