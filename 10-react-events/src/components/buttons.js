import React, { Component } from "react";

class Buttons extends Component {
	static defaultProps = {
		colors: ["#bada55", "#a55bad", "#bababa", "#516aaa"],
	};

	constructor(props) {
		super(props);
		this.state = {
			color: "white",
		};
	}

	changeColor = (newColor) => {
		this.setState({ color: newColor });
	};

	render() {
		return (
			<div
				className="button-list"
				style={{ backgroundColor: this.state.color }}
			>
				{this.props.colors.map((color) => {
					const colorObj = { backgroundColor: color };
					return (
						<div>
							<button
								className="btn"
								style={colorObj}
								onClick={this.changeColor.bind(this, color)}
							>
								click me
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Buttons;
