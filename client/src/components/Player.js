import React from 'react';
import styled from 'styled-components';


const PlayerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

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
