import React, { Component } from "react";
import axios from "axios";
import "./NewJokes.css";

class NewJokes extends Component {
	constructor(props) {
		super(props);
		this.state = { jokes: [] };
	}

	async componentDidMount() {
		let url = "https://icanhazdadjoke.com/";

		for (let i = 0; i < 10; i++) {
			let jokeReq = await axios.get(url, {
				headers: {
					accept: "application/json",
				},
			});
			let data = jokeReq.data;
			this.props.getJoke(data);
			this.setState((st) => {
				return { jokes: [...st.jokes, data] };
			});
		}
	}

	render() {
		return (
			<div className="NewJokes">
				<h1 className="text-light">NEW JOKES</h1>
				<i className="main-emoji fas fa-sad-cry my-4 text-warning"></i>
				<button className="btn btn-lg btn-success mt-1">New Jokes</button>
			</div>
		);
	}
}

export default NewJokes;
