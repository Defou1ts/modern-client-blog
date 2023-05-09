import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { JoinOurTeam } from './index';

describe('JoinOurTeam', () => {
	it('renders a  JoinOurTeam', () => {
		render(<JoinOurTeam />);
		const text = screen.getByText('about.join-our-team.title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('JoinOurTeam snapshot', () => {
		const component = renderer.create(<JoinOurTeam />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
