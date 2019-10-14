
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PlayerList from './PlayerList';


afterEach(rtl.cleanup);


it('PlayerList tests', () => {
	// PlayerList component expects props
	const data = [
		{
			name: 'Player One',
			country: 'United States',
			searches: 10,
			id: 1
		},
		{
			name: 'Player Two',
			country: 'Brazil',
			searches: 50,
			id: 2
		}
	];

	const wrapper = rtl.render(	<PlayerList players={data} /> );

	// display the app for a visual inspection
	console.log(wrapper.debug());



});


