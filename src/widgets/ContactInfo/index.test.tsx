import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { ContactInfo } from './index';

describe('ContactInfo', () => {
	it('renders a  ContactInfo', () => {
		render(<ContactInfo />);
		const text = screen.getByText('contact.title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('ContactInfo snapshot', () => {
		const component = renderer.create(<ContactInfo />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
