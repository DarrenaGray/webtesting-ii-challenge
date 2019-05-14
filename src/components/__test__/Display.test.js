import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './../Display';

describe('<Display />', () => {
	it('should render Display component', () => {
		render(<Display />);
	});

	// it('should increase balls by 1', () => {

	// });
});
