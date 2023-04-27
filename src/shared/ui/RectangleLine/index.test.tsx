import React from 'react';

import renderer from 'react-test-renderer';

import { RectangleLine } from './index';

describe('RectangleLine', () => {
	it('RectangleLine snapshot', () => {
		const component = renderer.create(<RectangleLine />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
