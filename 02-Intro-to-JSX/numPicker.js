class NumPicker extends React.Component {
	render() {
		const guess = Math.floor(Math.random() * 10);
		console.log(guess);
		return <h1>{guess === 7 ? "I am Happy" : "I am not happy"}</h1>;
	}
}

ReactDOM.render(<NumPicker />, document.getElementById("root2"));
