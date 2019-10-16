import React from 'react';
import styled from 'styled-components';


const PlayerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
	width: 250px;
	height: 110px;
	padding: 10px 20px;
	border: 1px solid black;
	border-radius: 10px;

	.name {
		font-size: 2rem;
	}

	.country {
		font-size: 1.8rem;
	}

	.searches {
		font-size: 1.6rem;
		font-style: italic;
	}
`;


const Player = (props) => {

	return (
		<PlayerWrapper>
			<p className='name'>{props.player.name}</p>
			<p className='country'>{props.player.country}</p>
			<p className='searches'>Searches: {props.player.searches}</p>
		</PlayerWrapper>
	);
};

export default Player;
