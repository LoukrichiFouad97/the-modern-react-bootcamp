import React, { Component } from "react";
import axios from "axios";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = { deckId: "", cardCode: "", cardImg: "", remaining: 52 };
	}

	async componentDidMount() {
		const url = "https://deckofcardsapi.com/api/deck/new/shuffle ";
		let decks = await axios.get(url);
		let data = decks.data;
		this.setState({ deckId: data.deck_id });
	}

	handleClick = async () => {
		let deck_id = this.state.deckId;
		let url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`;
		let card = await axios.get(url);
		let data = card.data.cards;
		this.setState({ remaining: card.data.remaining });
		for (const card of data) {
			this.setState({ cardCode: card.code, cardImg: card.image });
		}
		console.log(card.data.remaining);
	};

	render() {
		return (
			<div className="container">
				{this.state.remaining < 0 && (
					<div className="alert alert-danger">
						<p>There is no card to shuffle</p>{" "}
					</div>
				)}
				<div className="row justify-content-center mb-3">
					<button
						onClick={this.handleClick}
						className="btn btn-success col-4 text-center"
						disabled={!this.state.remaining}
					>
						GIMME CARD
					</button>
				</div>
				<div className="row justify-content-center">
					<h3 className="text-center">Remaining: {this.state.remaining}</h3>
				</div>
				<div className="row justify-content-center">
					{this.state.cardImg && (
						<img src={this.state.cardImg} alt={this.state.cardCode} />
					)}
				</div>
			</div>
		);
	}
}

export default Deck;
