
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';


afterEach(rtl.cleanup);


it('App tests', () => {
	// the app
	const wrapper = rtl.render(	<App /> );

	// display the app for a visual inspection
	console.log(wrapper.debug());


	// header title displays?
	const heading = wrapper.queryByText(/women\'s world cup/i);
	expect(heading).toBeVisible();

	// back and forward paging buttons display?
	const back = wrapper.queryByText(/back/i);
	expect(back).toBeVisible();

	const next = wrapper.queryByText(/next/i);
	expect(next).toBeVisible();

});

