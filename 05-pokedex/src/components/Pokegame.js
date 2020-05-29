/** Pokegame
 * 1 - render pokegame instead of pokedex
 * 2 - take 8 pokemons in devide them to 2 groups of 4
 * 3 - put every 4 pokemons in pokedex container
 * 4 - calc the total of each pokedex container exp point
 * 5 - pass the calculated exp point to pokedex
 * 6 - determine wich pokedex container is the winner
 * 7 - add isWinner prop to Pokedex
 * 8 - the winner pokedex should display a msg "THIS HAND WINS"
 */

import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
	static defaultProps = {
		pokemons: [
			{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
			{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
			{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
			{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
			{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
			{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
			{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
			{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
		],
	};

	render() {
		const hand1 = [];
		const hand2 = [...this.props.pokemons];
		while (hand1 < hand2) {
			let index = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(index, 1)[0];
			hand1.push(randPokemon);
		}

		const exp1 = hand1.reduce((exp, pkmn) => exp + pkmn.base_experience, 0);
		const exp2 = hand2.reduce((exp, pkmn) => exp + pkmn.base_experience, 0);

		return (
			<div>
				<Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
			</div>
		);
	}
}

export default Pokegame;
