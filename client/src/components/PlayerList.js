import React, { useState } from 'react';
import styled from 'styled-components';

import Player from './Player';
import { usePaging } from './usePaging';


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

	const pageSize = 12;  // number of cards to display per page
	const maxPage = Math.ceil(props.players.length / pageSize);  // total number of pages

	const [page, setPage] = useState(1);        // pages start at 1
	const [subset, setSubset] = useState([]);


	const goBack = () => {
		setPage(Math.max(1, page - 1));
	};

	const goForward = () => {
		setPage(Math.min(maxPage, page + 1));
	}


	// custom hook to page through an array of items
	// Parameters: list, set-subset-function, pageNumber, pageSize
	// whenever 'page' changes, the hook will fetch the appropiate subarray
	usePaging(props.players, setSubset, page, 12);


	return (
		<>
			<ButtonWrapper>
				<button onClick={goBack} className='back'>Back</button>
				<button onClick={goForward} className='next'>Next</button>
			</ButtonWrapper>
			<ListWrapper>
				{subset.map(player => <Player key={player.id} player={player} /> )}
			</ListWrapper>
		</>
	);
};

export default PlayerList;
