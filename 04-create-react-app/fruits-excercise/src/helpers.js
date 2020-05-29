// get a random item
const choice = (items) => {
	const randomItem = Math.floor(Math.random() * items.length);
	return items[randomItem];
};

// remove item from items
const remove = (items, item) => {
	// items.forEach((i, index) => {
	// 	if (i === item) {
	// 		console.log(items[index]);
	// 		items.splice(index, index + 1);
	// 	}
	// });
  // return [items];
  
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [...items.slice(0, i), ...items.slice(i + 1)];
		}
	}
};

export { choice, remove };
