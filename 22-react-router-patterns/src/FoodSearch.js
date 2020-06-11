import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
	constructor(props) {
		super(props);
		this.state = { query: "" };
	}

	handleChange = (e) => {
		this.setState({ query: e.target.value });
	};

	handleClick = () => {
		alert("Food Succesfully saved");
		this.props.history.push(`/${this.state.query}`);
	};
	
	render() {
		return (
			<div>
				<nav>
					<button onClick={this.goHome}>go home</button>
				</nav>
				<h1>Search For Food</h1>
				<form>
					<input
						type="text"
						value={this.state.query}
						onChange={this.handleChange}
					/>
					<Link to={this.state.query}>Go</Link>
				</form>
			</div>
		);
	}
}
