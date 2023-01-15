import { render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from './Home';

describe('Home tests', () => {
	it('should contains 3 carousels', () => {
		render(<Home />);
		const heading = screen.getAllByTestId('carousel');
		expect(heading).toHaveLength(3);
	});
});
