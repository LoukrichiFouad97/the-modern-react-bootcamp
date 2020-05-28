class Machine extends React.Component {
	render() {
		const styles = {
			color: "white",
			textTransform: "capitalize",
			borderRadius: "5px",
		};
		const { s1, s2, s3 } = this.props;
		const checkWinner = s1 === s2 && s2 === s3;
		return (
			<div className="Machine" style={styles}>
				<p>
					{s1} {s2} {s3}
				</p>
				<h2 className={checkWinner ? "win" : "lose"}>
					{checkWinner ? "Winner" : "Loser"}
				</h2>
			</div>
		);
	}
}
