import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { AboutOverview } from './index';

describe('AboutOverview', () => {
	it('renders a  AboutOverview', () => {
		render(<AboutOverview />);
		const text = screen.getByText('about.overview.title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('AboutOverview snapshot', () => {
		const component = renderer.create(<AboutOverview />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
