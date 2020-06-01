import React, { Component } from "react";

class LotteryBall extends Component {
	render() {
		return (
			<div>
				<span className="LotteryBall">{this.props.num}</span>
			</div>
		);
	}
}

export default LotteryBall;
