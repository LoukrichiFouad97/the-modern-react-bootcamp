import React, { Component } from "react";
import axios from "axios";

class GithubFinder extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", img: "" };
	}

	async componentDidMount() {
		let url = `https://api.github.com/users/${this.props.username}`;
		let getData = await axios.get(url);
		let data = getData.data;
		this.setState({ name: data.name, img: data.avatar_url });
    console.log("component did mount");
	}
  
	componentDidUpdate() {
    console.log("component did update");
	}
  
	render() {
    console.log("render");
		let { name, img } = this.state;
		let check;

		if (name && img) {
			check = (
				<div>
					<h1>Github Username: {name}</h1>
					<img src={img} alt={name} />
				</div>
			);
		} else {
			check = "";
		}
		return <div>{check} </div>;
	}
}

export default GithubFinder;
