import React, { Component } from "react";

class AlphaButton extends Component {
	static defaultProps = {
		chars: ["abcdefghijklmnopqrstuvwxyz".split("")],
	};
	render() {
		return (
			<div>
				<p>{this.props.chars}</p>
				{this.props.chars.map((char) => {
					return (
						<button
							value={char}
							onClick={this.props.onclick()}
							disabled={this.props.disabled.has(char)}
							key={char}
						>
							{this.props.value}
						</button>
					);
				})}
			</div>
		);
	}
}

export default AlphaButton;
