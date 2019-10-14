
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Player from './Player';


afterEach(rtl.cleanup);


it('Player tests', () => {
	// Player component need some data fed to it
	const player = {
			name: 'Player One',
			country: 'United States',
			searches: 10,
			id: 1
		};


	// the Player component
	const wrapper = rtl.render(	<Player player={player} /> );

	// display the app for a visual inspection
	console.log(wrapper.debug());



});

