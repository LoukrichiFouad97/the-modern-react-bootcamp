class App extends React.Component {
	render() {
		return (
			<div>
				<Machine s1="x" s2="x" s3="d" />
				<Machine s1="x" s2="x" s3="x" />
				<Machine s1="x" s2="x" s3="q" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
