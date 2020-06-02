import React, { Component } from "react";

class Li extends Component {
	handleRemove = (e) => {
		this.props.remove(this.props.value);
	};

	render() {
		return (
			<li>
				{this.props.value}
				<button onClick={this.handleRemove}>X</button>
			</li>
		);
	}
}

export default Li;
