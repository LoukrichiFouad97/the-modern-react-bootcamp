import React from "react";
import { Route, Switch } from "react-router-dom";
import Food from "./Food";
import FoodSearch from "./FoodSearch";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route
					exact
					path="/"
					render={(routeProps) => <FoodSearch {...routeProps} />}
				/>
				<Route exact path="/:name" component={Food} />
				<Route exact render={() => <h1>Page Not Found</h1>} />
			</Switch>
		</div>
	);
}
