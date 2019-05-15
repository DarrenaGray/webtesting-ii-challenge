import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
	state = {
		balls: 0,
		strikes: 0,
		fouls: 0,
		hits: 0
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

	rese;

	fouls = () => {
		let strike = this.state.strikes;
		let foul = this.state.fouls;
		if (foul <= 1 && strike <= 1) {
			this.setState({
				fouls: foul + 1,
				strikes: strike + 1
			});
		} else {
			this.setState({
				fouls: foul + 1
			});
		}
	};

	hits = () => {
		let hit = this.state.hits;
		this.setState({
			hits: hit + 1,
			strikes: 0,
			balls: 0
		});
	};

	resetFouls = () => {
		this.setState({
			fouls: 0
		});
	};

	resetHits = () => {
		this.setState({
			hits: 0
		});
	};

	render() {
		return (
			<div>
				<h3>Display</h3>
				<p>Balls: {this.state.balls}</p>
				<p>Strikes: {this.state.strikes}</p>
				<p>Fouls: {this.state.fouls}</p>
				<p>Hits: {this.state.hits}</p>
				<Dashboard
					display={this.state}
					balls={this.balls}
					strikes={this.strikes}
					fouls={this.fouls}
					resetFouls={this.resetFouls}
					hits={this.hits}
					resetHits={this.resetHits}
				/>
			</div>
		);
	}
}

export default Display;
