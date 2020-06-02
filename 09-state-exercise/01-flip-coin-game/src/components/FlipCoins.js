import React, { Component } from "react";
import GetCoin from "./GetCoin";
import { random } from "./Helps";

class FlipCoin extends Component {
	static defaultProps = {
		coins: [
			{
				side: "heads",
				src:
					"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
			},
			{
				side: "tails",
				src:
					"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=593667a382427606ff4e3f877bc87cdef05a4c03-1591028838-0-Aag3wBIRfeGaRPq8yHgBRsfNqn8aLe3Pq5FQXjNYiNCcEuvYB_b1Zw7HnyORqCA55tnrQTxbodko-RVVw2tXhPdX-Y3Xc26l4XSZWRRYu-CHETJ_Nn5gjfJc2lQUk8gSSpJSLlLZh3qrnuerqA6_USR6-kTV8PhW-MRyqk4gvVT5CQwO-2tHcPZrNKx7p6JLdMVwSU70TmXfnyJzow-A16_aHVCmtEv4f3ZPI_MTqgJ6_q2wF_x-GtoagbQztAS8JtqCfAdZU2O6lRYnqiAnvK21x7tKTILrRZlp5GQEGt2VSmPCN1wnYnw7mvWHulxhYQ",
			},
		],
	};

	constructor(props) {
		super(props);
		this.state = {
			coin: null,
			headsCount: 0,
			tailsCount: 0,
			flipCounts: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		let newCoin = random(this.props.coins);
		this.setState((st) => {
			let newState = {
				coin: this.props.coins[newCoin],
				flipCounts: st.flipCounts + 1,
				headsCount: st.headsCount + (newCoin.side === "heads" ? 1 : 0),
				tailsCount: st.tailsCount + (newCoin.side === "tails" ? 1 : 0),
			};
			return newState;
		});
	}

	handleClick(e) {
		this.flipCoin();
	}

	render() {
		return (
			<div className="FlipCoins">
				<h1>Let's Flip Coins</h1>
				{this.state.coin && <GetCoin src={this.state.coin.src} />}
				<button onClick={this.handleClick} className="btn btn-warning">
					Flip Coin!
				</button>
				<p>
					Out of {this.state.flipCounts} flips, you have {this.state.headsCount}{" "}
					heads and
					{this.state.tailsCount} tails
				</p>
			</div>
		);
	}
}

export default FlipCoin;
