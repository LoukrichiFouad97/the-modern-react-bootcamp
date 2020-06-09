import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import uuid from "uuid";

class JokeList extends Component {
	static defaultProps = {
		maxJokeToGet: 10,
	};

	constructor(props) {
		super(props);
		this.state = {
			jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
		};
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) {
			this.getJokes();
		}
	}

	async getJokes() {
		const jokes = [];
		const url = "https://icanhazdadjoke.com/";
		while (jokes.length < this.props.maxJokeToGet) {
			const JokeReq = await axios.get(url, {
				headers: { accept: "application/json" },
			});
			jokes.push({ id: uuid(), joke: JokeReq.data.joke, votes: 0 });
		}
		this.setState({ jokes: jokes });
		window.localStorage.setItem("jokes", JSON.stringify(jokes));
	}

	handleVoting = (id, delta) => {
		this.setState(
			(st) => ({
				jokes: st.jokes.map((j) =>
					j.id === id ? { ...j, votes: j.votes + delta } : j
				),
			}),
			() => localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
		);
	};

	handleClick = () => {
		this.getJokes();
	};

	render() {
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title mb-4">
						<span>Dad</span>
						Jokes
					</h1>
					<i className="JokeList-img fas fa-sad-cry rounded-circle"></i>
					<button
						onClick={this.handleClick}
						className="JokeList-getmore btn btn-success"
					>
						New Jokes
					</button>
				</div>

				<div className="JokeList-jokes">
					{this.state.jokes.map((jk) => {
						return (
							<div>
								<Joke
									key={jk.id}
									text={jk.joke}
									votes={jk.votes}
									upVote={this.handleVoting.bind(null, jk.id, 1)}
									downVote={this.handleVoting.bind(null, jk.id, -1)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default JokeList;
