import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { AboutOurTeam } from './index';

describe('AboutOurTeam', () => {
	it('renders a  AboutOurTeam', () => {
		render(<AboutOurTeam />);
		const text = screen.getByText('about.our-team.our-team-title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('AboutOurTeam snapshot', () => {
		const component = renderer.create(<AboutOurTeam />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
