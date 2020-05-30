// Pokecard should shows singal pokemon with its props
import React, { Component } from "react";
import "./Pokecard.css";
const POKEMN_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
	render() {
		const { id, name, type, experience } = this.props;
		return (
			<div className="Pokemon">
				<h3 className="Pokemon-name">{name}</h3>
				<img
					className="Pokemon-img"
					src={`${POKEMN_API}/${padToThree(id)}.png`}
				/>
				<p>Type: {type}</p>
				<p>Exp: {experience}</p>
			</div>
		);
	}
}

export default Pokecard;
