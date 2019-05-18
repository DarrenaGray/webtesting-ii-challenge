import React from 'react';

const Dashboard = props => {
	return (
		<div>
			<h3>Dashboard</h3>
			<button data-testid='balls' onClick={props.balls}>
				Balls
			</button>
			<button onClick={props.strikes}>Strikes</button>
			<button onClick={props.fouls}>Fouls</button>
			<button onClick={props.resetFouls}>Reset</button>
			<button onClick={props.hits}>Hits</button>
			<button onClick={props.resetHits}>Reset</button>
		</div>
	);
};

export default Dashboard;
