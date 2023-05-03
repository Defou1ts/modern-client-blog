import React from 'react';

import renderer from 'react-test-renderer';

import { LogoList } from './index';

describe('LogoList', () => {
	it('LogoList snapshot', () => {
		const component = renderer.create(<LogoList />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
