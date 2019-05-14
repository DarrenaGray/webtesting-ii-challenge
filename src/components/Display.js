import React from 'react';

class Display extends React.Component {
	state = {
		balls: 0,
		strikes: 0
	};

	balls = () => {
		let ball = this.state.balls;
		if (ball < 4) {
			this.setState({
				balls: ball + 1
			});
		} else if ((ball = 4)) {
			this.setState({
				balls: 0
			});
		} else {
			return ball;
		}
	};

	strikes = () => {
		let strike = this.state.strikes;
		if (strike < 3) {
			this.setState({
				strikes: strike + 1
			});
		} else if ((strike = 3)) {
			this.setState({
				strikes: 0
			});
		} else {
			return strike;
		}
	};

	render() {
		return (
			<div>
				<h3>Display</h3>
				<p>Balls: {this.state.balls}</p>
				<button data-testid='balls' onClick={this.balls}>
					Balls
				</button>
				<p>Strikes: {this.state.strikes}</p>
				<button onClick={this.strikes}>Strikes</button>
			</div>
		);
	}
}

export default Display;
