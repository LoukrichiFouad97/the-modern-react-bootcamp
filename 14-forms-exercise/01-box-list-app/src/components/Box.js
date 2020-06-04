/**
 * render box using height & width & color
 */
import React, { Component } from "react";

class Box extends Component {
	render() {
		const { height, width, bgColor } = this.props;
		const styles = {
			height: height + "px",
			width: width + "px",
			backgroundColor: bgColor,
			marginTop: "20px",
		};
		return (
			<div>
				<div style={styles}>
					<div onClick={this.props.removeBox}>&times;</div>
				</div>
			</div>
		);
	}
}

export default Box;
