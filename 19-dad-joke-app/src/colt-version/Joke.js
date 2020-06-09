import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
	getColor = () => {
		const { votes } = this.props;
		if (votes >= 15) {
			return "#4caf50";
		} else if (votes >= 12) {
			return "#88c34a";
		} else if (votes >= 9) {
			return "#cddc39";
		} else if (votes >= 6) {
			return "#ffeb3b";
		} else if (votes >= 3) {
			return "#ffc107";
		} else if (votes >= 0) {
			return "#ff9800";
		} else {
			return "#f44336";
		}
	};

	getEmoji = () => {
		const { votes } = this.props;
		if (votes >= 15) {
			return "fa-sad-cry";
		} else if (votes >= 12) {
			return "fa-grin-squint-tears";
		} else if (votes >= 6) {
			return "fa-laugh";
		} else if (votes >= 0) {
			return "fa-smile-beam";
		} else {
			return "fa-angry";
		}
	};

	render() {
		return (
			<div className="Joke row">
				<div className="Joke-buttons col-sm-6 col-md-4 order-1 ">
					<i onClick={this.props.upVote} className="fas fa-arrow-up"></i>
					<span style={{ borderColor: this.getColor() }} className="Joke-votes">
						{this.props.votes}
					</span>
					<i onClick={this.props.downVote} className="fas fa-arrow-down"></i>
				</div>

				<div className="Joke-text col-sm-12 col-md-6 order-sm-3 order-md-2 ">
					{this.props.text}
				</div>

				<div className="col-sm-6 col-md-2 order-sm-2 order-md-2 ">
					<i
						className={`Joke-emoji fas ${this.getEmoji()} rounded-circle ml-auto`}
					></i>
				</div>
			</div>
		);
	}
}

export default Joke;
