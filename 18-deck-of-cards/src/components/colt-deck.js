import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
const API_URL_BASE = "https://deckofcardsapi.com/api/deck";

class ColtDeck extends Component {
	constructor(props) {
		super(props);
		this.state = { deck: null, drawn: [], remaining: true };
	}

	async componentDidMount() {
		let deck = await axios.get(`${API_URL_BASE}/new/shuffle`);
		this.setState({ deck: deck.data });
	}

	getCard = async () => {
		try {
			let id = this.state.deck.deck_id;
			let cardUrl = `${API_URL_BASE}/${id}/draw/`;
			let cardReq = await axios.get(cardUrl);
			if (!cardReq.data.success) {
				throw new Error("there is no cards left!");
			}

			let card = cardReq.data.cards[0];
			this.setState((st) => {
				return {
					drawn: [
						...st.drawn,
						{
							id: card.code,
							image: card.image,
							name: `${card.value} of ${card.suit}`,
						},
					],
				};
			});
		} catch (err) {
			alert(err);
		}
	};

	render() {
		const card = this.state.drawn.map((cr) => {
			return <Card name={cr.name} image={cr.image} />;
		});
		return (
			<>
				{!this.state.remaining && (
					<div className="alert alert-danger">there is no cards left</div>
				)}
				<hr className="my-3" />
				<h1 className="text-primary">Card Dealer</h1>
				<hr className="my-3" />
				<button
					onClick={this.getCard}
					className="btn btn-primary btn-lg"
					disabled={!this.state.remaining}
				>
					Get Card
				</button>
				<hr className="my-2" />
				<div className="row position-relative">{card}</div>
			</>
		);
	}
}

export default ColtDeck;
