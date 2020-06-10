import React, { Component } from "react";
import Alerts from "./alert";

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="text-center">Contact Us</h1>
				<form className="shadow p-2 rounded">
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">#</span>
							</div>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="name">Email:</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">@</span>
							</div>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="name">Password:</label>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">@</span>
							</div>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="btn btn-info col-6 offset-3">Submit</div>
				</form>
				<Alerts>
					<p>Lorem ipsum dolor sit amet.</p>
				</Alerts>
			</div>
		);
	}
}

export default Contact;
