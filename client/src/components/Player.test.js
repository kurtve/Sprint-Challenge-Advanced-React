
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

	// displays player name?
	const name = wrapper.queryByText(/player one/i);
	expect(name).toBeVisible();

	// displays country?
	const country = wrapper.queryByText(/united states/i);
	expect(country).toBeVisible();

	// displays searches?
	const searches = wrapper.queryByText(/searches: 10/i);
	expect(searches).toBeVisible();


});

