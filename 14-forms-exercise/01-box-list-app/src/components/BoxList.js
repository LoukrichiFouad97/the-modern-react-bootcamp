import React, { Component } from "react";
import BoxListForm from "./BoxListForm";
import Box from "./Box";

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [
				{
					height: "",
					width: "",
					bgColor: "",
				},
			],
		};
	}

	createBox = (box) => {
		this.setState({ boxes: [...this.state.boxes, box] });
	};

	remove = (id) => {
		this.setState({
			boxes: this.state.boxes.filter((box) => box.id !== id),
		});
	};

	render() {
		const boxes = this.state.boxes.map((box) => {
			return (
				<Box
					key={box.id}
					height={box.height}
					width={box.width}
					bgColor={box.bgColor}
					removeBox={() => this.remove(box.id)}
				/>
			);
		});
		return (
			<div>
				<BoxListForm create={this.createBox} />
				{boxes}
			</div>
		);
	}
}

export default BoxList;
