import React, { Component } from "react";

class Alerts extends Component {
	render() {
		return (
			<div className="alert alert-danger">
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default Alerts;
