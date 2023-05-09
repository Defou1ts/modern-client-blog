import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { HomeAboutUs } from './index';

describe('HomeAboutUs', () => {
	it('renders a  HomeAboutUs', () => {
		render(<HomeAboutUs />);
		const text = screen.getByText('home.about.about-title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('HomeAboutUs snapshot', () => {
		const component = renderer.create(<HomeAboutUs />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
