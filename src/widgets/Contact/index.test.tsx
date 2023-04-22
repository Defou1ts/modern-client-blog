import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Contact } from './index';

describe('Contact', () => {
	it('renders a  Contact', () => {
		render(<Contact />);
		const text = screen.getByText('contact.subtitle');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('Contact snapshot', () => {
		const component = renderer.create(<Contact />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
