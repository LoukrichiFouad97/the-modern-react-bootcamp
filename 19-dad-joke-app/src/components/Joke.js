import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
	constructor(props) {
		super(props);
		this.state = { netScore: 0 };
	}

	voteUp = () => {
		this.setState({ netScore: this.state.netScore + 1 });
	};

	voteDown = () => {
		this.setState({ netScore: this.state.netScore - 1 });
	};

	render() {
		let netScoreColor;
		let emojiFace;
		const { netScore } = this.state;

		if (netScore < 0) {
			emojiFace = "fas fa-angry";
		} else if (netScore <= 4) {
			emojiFace = "fas fa-smile-beam";
			netScoreColor = "danger";
		} else if (netScore <= 8) {
			emojiFace = "fas fa-grin-squint-tears";
			netScoreColor = "warning";
		} else {
			emojiFace = "fas fa-sad-cry";
			netScoreColor = "success";
		}

		return (
			<div className="row Joke">
				<div className="vote">
					{/* Vote up */}
					<button
						onClick={this.voteUp}
						className="vote-btn btn btn-outline-success rounded-circle"
					>
						<i className="fas fa-arrow-up"></i>
					</button>

					<span
						className={`vote-res mx-2 border border-${netScoreColor} p-3 rounded-circle`}
					>
						{this.state.netScore}
					</span>

					{/* Vote Down */}
					<button
						onClick={this.voteDown}
						className="vote-btn btn  btn-outline-success rounded-circle"
					>
						<i className="fas fa-arrow-down"></i>
					</button>
				</div>
				{/* <p>{this.props.jokeInfo}</p> */}
				{console.log(this.props.jokeInfo)}
				<i className={`joke-emoji ${emojiFace} display-4 text-warning`}></i>
			</div>
		);
	}
}

export default Joke;
