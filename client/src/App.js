import React, { Component } from 'react';
import styled from 'styled-components';

import PlayerList from './components/PlayerList';



const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	h1 {
		font-size: 5rem;
		text-align: center;
	}

`;


class App extends Component {
	constructor() {
		super();

		this.state = {
			players: [
				{
					"name": "Alex Morgan",
					"country": "United States",
					"searches": 100,
					"id": 0
				},
				{
					"name": "Megan Rapinoe",
					"country": "United States",
					"searches": 99,
					"id": 1
				}
			]
		};

	}



	render() {
		return (
			<AppWrapper>
				<h1>Women's World Cup</h1>
				<PlayerList players={this.state.players} />
			</AppWrapper>
		);
	}

}


export default App;
