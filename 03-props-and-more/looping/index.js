class App extends React.Component {
	render() {
		return (
			<div>
				<List
					cat="security"
					job={["web developer", "hacker", "software engineer"]}
				/>
				<List cat="admin" job={["sys admin", "net eng", "db admin"]} />
				<List job={["graphic designer", "help desk", "security analyst"]} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
