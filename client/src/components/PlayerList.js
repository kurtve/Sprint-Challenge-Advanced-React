import React from 'react';
import styled from 'styled-components';

import Player from './Player';



const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 300px;
	padding-top: 20px;

	button {
		margin: 0px 20px;
		height: 30px;
		width: 60px;
		border-radius: 5px;
		border: none;
		font-size: 1.4rem;

		&:hover {
			cursor: pointer;
		}
	}

`;


const ListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 20px;
	flex-wrap: wrap;

`;




const PlayerList = (props) => {


	const goBack = () => {
		console.log('go back 1 page');
	};

	const goForward = () => {
		console.log('go forward 1 page');
	}


	return (
		<>
			<ButtonWrapper>
				<button onClick={goBack} className='back'>Back</button>
				<button onClick={goForward} className='next'>Next</button>
			</ButtonWrapper>
			<ListWrapper>
				{props.players.map(player => <Player key={player.id} player={player} /> )}
			</ListWrapper>
		</>
	);
};

export default PlayerList;
