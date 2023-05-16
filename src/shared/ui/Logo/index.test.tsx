import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Logo } from './index';

describe('Logo', () => {
	it('renders Logo', () => {
		render(<Logo />);
		const text = screen.getByText('Modsen Client Blog');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('Logo  snapshot', () => {
		const component = renderer.create(<Logo />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
