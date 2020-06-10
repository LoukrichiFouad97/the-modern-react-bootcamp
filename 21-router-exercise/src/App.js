import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand navbar-light bg-light">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="border-bottom border-danger"
									className="nav-link m-3"
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="border-bottom border-danger"
									className="nav-link m-3"
									to="/about"
								>
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									activeClassName="border-bottom border-danger"
									className="nav-link m-3"
									to="/contact"
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
