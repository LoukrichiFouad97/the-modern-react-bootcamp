import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);
		let angle = Math.random() * 90 - 45;
		let xPos = Math.random() * 40 - 20;
		let yPos = Math.random() * 40 - 20;
		this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
	}
	render() {
		const styles = {
			transfor: this._transform,
			left: "0",
			top: "0",
		};
		return (
			<div className="mr-auto">
				<img
					className="position-absolute mr-auto"
					style={styles}
					src={this.props.image}
					alt={this.props.name}
				/>
			</div>
		);
	}
}

export default Card;
