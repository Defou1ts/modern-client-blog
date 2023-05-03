import React from 'react';

import renderer from 'react-test-renderer';

import { WhyWeStarted } from './index';

describe('WhyWeStarted', () => {
	it('WhyWeStarted snapshot', () => {
		const component = renderer.create(<WhyWeStarted />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
