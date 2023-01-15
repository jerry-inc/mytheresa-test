import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App tests', () => {
	it('should contains a Header', () => {
		render(<App />);
		const heading = screen.getByTestId('header');
		expect(heading).toBeInTheDocument();
	});

	it('should contains content area', () => {
		render(<App />);
		const heading = screen.getByTestId('content');
		expect(heading).toBeInTheDocument();
	});
});
