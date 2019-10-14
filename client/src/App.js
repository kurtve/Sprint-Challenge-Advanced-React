import React, { Component } from 'react';
import styled from 'styled-components';

import PlayerList from './components/PlayerList';
import { getApi } from './components/getApi';


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
			players: []
		};

	}


	updatePlayers = (data) => {
		this.setState({ players: data });
	};


	componentDidMount() {
		getApi('http://localhost:5000/api/players', this.updatePlayers);
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
