import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { CategoryTag } from './index';

describe('CategoryTag', () => {
	it('renders a CategoryTag', () => {
		render(<CategoryTag tagName="Business" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('CategoryTag snapshot', () => {
		const component = renderer.create(<CategoryTag tagName="Business" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
