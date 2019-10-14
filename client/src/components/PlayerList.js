import React from 'react';
import styled from 'styled-components';

import Player from './Player';



const ListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 20px;

`;


const PlayerList = (props) => {

	return (
		<ListWrapper>
			{props.players.map(player => <Player key={player.id} player={player} /> )}
		</ListWrapper>
	);
};

export default PlayerList;
