// Pokedex should generate all pokemons that created with pokecard
import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
	render() {
		const { isWinner, exp, pokemon } = this.props;
		let title;
		if (isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-looser">Loosing Hand</h1>;
		}

		return (
			<div className="Pokedex">
				<h1 className="Pokedex-title">Pokedex</h1>
				<h4>Total experince {exp}</h4>
				{title}

				<div className="Pokedex-container">
					{pokemon.map((p) => (
						<Pokecard
							id={p.id}
							name={p.name}
							type={p.type}
							experience={p.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
