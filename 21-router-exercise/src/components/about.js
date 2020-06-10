import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<>
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="https://images.unsplash.com/photo-1591745884523-a7e80448441e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80"
								alt="First slide"
							/>
						</div>

						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://images.unsplash.com/photo-1591387410877-9a8e98179dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
								alt="Second slide"
							/>
						</div>

						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://images.unsplash.com/photo-1591613508984-8a28c527a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
								alt="Third slide"
							/>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</>
		);
	}
}

export default About;
