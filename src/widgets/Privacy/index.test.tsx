import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Privacy } from './index';

describe('Privacy', () => {
	it('renders a  Privacy', () => {
		render(<Privacy />);
		const text = screen.getByText('Privacy Policy');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('Privacy snapshot', () => {
		const component = renderer.create(<Privacy />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
