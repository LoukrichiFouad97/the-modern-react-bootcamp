import React, { Component } from "react";

class GetCoin extends Component {
	render() {
		return (
			<div>
				<img className="coin-img" src={this.props.src} />
			</div>
		);
	}
}

export default GetCoin;
