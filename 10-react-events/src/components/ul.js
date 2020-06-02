import React, { Component } from "react";
import Li from "./li";

class Ul extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: [1, 2, 5, 3, 6, 4],
		};
		this.remove = this.remove.bind(this);
	}

	remove(num) {
		const filtred = this.state.nums.filter((x) => x !== num);
		this.setState({ nums: filtred });
	}

	render() {
		return (
			<div>
				<h1>To do list </h1>
				<ul>
					{this.state.nums.map((num) => {
						return <Li key={num} value={num} remove={this.remove} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Ul;
