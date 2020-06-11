import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Navbar extends Component {
	goHome = () => {
		alert("Going Home...");
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<button onClick={this.goHome}>Go Home</button>
			</div>
		);
	}
}

export default withRouter(Navbar);
