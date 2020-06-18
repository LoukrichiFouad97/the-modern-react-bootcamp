function getImg() {
	const imgs = [
		"http://placehold.it/100/150",
		"http://placehold.it/100/43",
		"http://placehold.it/100/55",
		"http://placehold.it/100/234",
		"http://placehold.it/100/43",
	];
	return imgs[Math.floor(Math.random() * imgs.length)];
}

class Demo extends React.Component {
	render() {
		return (
			<div>
				<h1>Image from JSX</h1>
				<img src= {getImg()} />
			</div>
			// React.createElement(
			// 	"div",
			// 	null,
			// 	React.createElement("h1", null, "Image from JSX"),
			// 	React.createElement("img", { src: { getImg } })
			// )
		);
	}
}

ReactDOM.render(<Demo />, document.getElementById("root"));
