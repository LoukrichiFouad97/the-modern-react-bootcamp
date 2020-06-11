import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Nav extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
					<Link className="navbar-brand" to="/dogs">
						Dog Finder
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								{this.props.dogName.map((dog) => {
									return (
										<NavLink
											className="nav-link d-sm-inline-block"
											exact
											to={`/dogs/${dog}`}
											key={dog}
										>
											{dog}
										</NavLink>
									);
								})}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
