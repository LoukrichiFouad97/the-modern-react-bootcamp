import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	render() {
		return (
			<div className={`Die`}>
				<i
					className={`Die-icon fas fa-dice-${this.props.dieNum} ${
						this.props.rollingState && "animate-die"
					}`}
				></i>
			</div>
		);
	}
}

export default Die;
