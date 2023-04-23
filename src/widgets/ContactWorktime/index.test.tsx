import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { ContactWorkTime } from './index';

describe('ContactWorkTime', () => {
	it('renders a  ContactWorkTime', () => {
		render(<ContactWorkTime />);
		const text = screen.getByText('contact.working.title-days');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('ContactWorkTime snapshot', () => {
		const component = renderer.create(<ContactWorkTime />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
