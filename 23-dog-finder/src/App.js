import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import Dog from "./components/Dog";
import Dogs from "./components/Dogs";
import "./App.css";
import BTS from "./components/bts";

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: "Whiskey",
				age: 5,
				src:
					"https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				facts: [
					"Whiskey loves eating popcorn.",
					"Whiskey is a terrible guard dog.",
					"Whiskey wants to cuddle with you!",
				],
			},
			{
				name: "Hazel",
				age: 3,
				src:
					"https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				facts: [
					"Hazel has soooo much energy!",
					"Hazel is highly intelligent.",
					"Hazel loves people more than dogs.",
				],
			},
			{
				name: "Tubby",
				age: 4,
				src:
					"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				facts: [
					"Tubby is not the brightest dog",
					"Tubby does not like walks or exercise.",
					"Tubby loves eating food.",
				],
			},
		],
	};

	render() {
		const dogNames = this.props.dogs.map((dog) => dog.name);
		const getDog = (props) => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find((dog) => {
				return dog.name.toLowerCase() === name.toLowerCase();
			});
			return <Dog {...props} dog={currentDog} />;
		};
		return (
			<div className="App">
				<BTS />
				<Nav dogName={dogNames} />
				<Switch>
					<Route
						exact
						path="/dogs"
						render={() => <Dogs dogs={this.props.dogs} />}
					/>
					<Route exact path="/dogs/:name" render={getDog} />
					<Route
						exact
						render={() => (
							<h1 className="text-center text-danger">Error Page Not Found</h1>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
