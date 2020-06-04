import React, { Component } from "react";
import ShopingListForm from "./ShopingListForm";
import uuid from "uuid";

class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ name: "Milk", qty: "2 liters", id: uuid() },
				{ name: "potato", qty: "1 kilo", id: uuid() },
			],
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(item) {
		let newId = { ...item, id: uuid() };
		this.setState((state) => {
			return { items: [...state.items, newId] };
		});
	}

	renderItems() {
		return (
			<ul>
				{this.state.items.map((item) => {
					return (
						<li>
							{item.name}: {item.qty}{" "}
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<h1>Shpping List</h1>
				{this.renderItems()}
				<ShopingListForm addItem={this.addItem} />
			</div>
		);
	}
}

export default ShoppingList;
