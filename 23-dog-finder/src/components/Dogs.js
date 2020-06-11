import React, { Component } from "react";

export default class Dogs extends Component {
	render() {
		return (
			<div className="Dogs">
				<h1 className="text-center text-light display-4 py-3">Click a Dog</h1>
				<div className="container">
					<div className="dog row">
						{this.props.dogs.map((dog) => {
							return (
								<div className="col-md-4 col-sm-6" key={dog.name}>
									<img className="rounded-circle" src={dog.src} alt="" />
									<h5 className="text-light mt-1">{dog.name}</h5>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
