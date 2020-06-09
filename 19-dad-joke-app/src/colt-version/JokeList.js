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
			loading: false,
		};
		this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) {
			this.getJokes();
		}
	}

	async getJokes() {
		try {
			const jokes = [];
			const url = "https://icanhazdadjoke.com/";

			while (jokes.length < this.props.maxJokeToGet) {
				const JokeReq = await axios.get(url, {
					headers: { accept: "application/json" },
				});
				let newJoke = JokeReq.data.joke;
				if (!this.seenJokes.has(newJoke)) {
					jokes.push({ id: uuid(), joke: JokeReq.data.joke, votes: 0 });
				} else {
					console.log("DOUBLICATE JOKE FOUND");
					console.log(newJoke);
				}
			}
			this.setState(
				(st) => ({
					loading: false,
					jokes: [...st.jokes, ...jokes],
				}),
				() =>
					window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
			);
			window.localStorage.setItem("jokes", JSON.stringify(jokes));
		} catch (err) {
			alert(err);
		}
	}

	handleVoting = (id, delta) => {
		this.setState(
			(st) => ({
				jokes: st.jokes.map((j) =>
					j.id === id ? { ...j, votes: j.votes + delta } : j
				),
			}),
			() =>
				window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
		);
	};

	handleClick = () => {
		this.setState({ loading: true });
		this.getJokes();
	};

	render() {
		if (this.state.loading) {
			return (
				<div className="JokeList-spinner">
					<i className="far fa-8x fa-laugh fa-spin"></i>
					<h1 className="JokeList-title">Loading...</h1>
				</div>
			);
		}
		let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

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
					{jokes.map((jk) => {
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
