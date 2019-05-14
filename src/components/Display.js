import React from 'react';

class Display extends React.Component {
	state = {
		balls: 0,
		strikes: 0
	};

	balls = () => {
		this.setState({
			balls: this.state.balls + 1
		});
	};

	render() {
		return (
			<div>
				<h3>Display</h3>
				<p>Balls: {this.state.balls}</p>
				<button onClick={this.balls}>Balls</button>
				<p>Strikes: {this.state.strikes}</p>
			</div>
		);
	}
}

export default Display;
