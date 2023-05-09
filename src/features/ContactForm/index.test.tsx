import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { ContactForm } from './index';

describe('ContactForm', () => {
	it('renders a  ContactForm', () => {
		render(<ContactForm />);
		const text = screen.getByText('contact.form.related');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('ContactForm snapshot', () => {
		const component = renderer.create(<ContactForm />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
