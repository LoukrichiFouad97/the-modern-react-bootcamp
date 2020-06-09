import React, { Component } from "react";
import NewJokes from "./NewJokes";
import Joke from "./Joke";

class DadJokes extends Component {
	constructor(props) {
		super(props);
		this.state = { jokes: [] };
	}

	updateJokes = (fetchedJokes) => {
		this.setState({ jokes: [...this.state.jokes, fetchedJokes] });
	};

	render() {
		return (
			<div className="DadJokes">
				<NewJokes getJoke={this.updateJokes} />
				<div className="jokes">
					<Joke jokeInfo={this.state.jokes} />
				</div>
			</div>
		);
	}
}

export default DadJokes;
