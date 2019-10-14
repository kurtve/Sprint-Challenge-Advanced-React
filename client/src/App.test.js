
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





});


