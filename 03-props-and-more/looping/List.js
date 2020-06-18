class List extends React.Component {
	static defaultProps = {
		cat: "uncategorized jobs",
	};

	render() {
		return (
			<div>
				<h1>{this.props.cat}</h1>
				<ul>
					{this.props.job.map((h) => (
						<li>{h}</li>
					))}
				</ul>
			</div>
		);
	}
}
