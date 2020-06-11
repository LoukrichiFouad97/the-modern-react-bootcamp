import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dog extends Component {
	render() {
		console.log(this.props.dog);
		const { name, src, age, facts } = this.props.dog;
		return (
			<div className="Dog">
				<div className="container row d-flex justify-content-center align-items-center">
					<div
						className="card bg-dark text-light rounded"
						style={{ width: "20rem" }}
					>
						<img className="card-img-top" />
						<img className="card-img-top" src={src} alt={name} />
						<div className="card-body">
							<h3 className="card-title mb-0">{name}</h3>
							<span className="text-muted">{age} years old</span>
							<ul className="list-group list-group-flush">
								{facts.map((fact, idx) => {
									return (
										<li className="card-text" key={idx}>
											{fact}
										</li>
									);
								})}
							</ul>
							<div className="card-body">
								<Link className="btn btn-primary mt-2" to="/dogs">
									Back Home!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
