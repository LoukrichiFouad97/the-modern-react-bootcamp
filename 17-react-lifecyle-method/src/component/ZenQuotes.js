import React, { Component } from "react";
import axios from "axios";

class ZenQuotes extends Component {
	constructor(props) {
		super(props);
		this.state = { quote: "", isLoading: false };
	}

	componentDidMount() {
		setTimeout(() => {
			axios.get("https://api.github.com/zen").then((res) => {
				this.setState({ quote: res.data, isLoading: true });
			});
		}, 3000);
	}

	render() {
		let data;
		if (!this.state.isLoading) {
			data = <h3>Waiting...</h3>;
		} else {
			data = (
				<div>
					<h1>Remember this...</h1>
					<h2>{this.state.quote}</h2>
				</div>
			);
		}

		return (
			<div>
				{data}
			</div>
		);
	}
}

export default ZenQuotes;
