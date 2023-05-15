import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Portal } from './index';

describe('Portal', () => {
	it('renders Portal', () => {
		render(<Portal>Test Portal</Portal>);
		const text = screen.getByText('Test Portal');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('Portal  snapshot', () => {
		const component = renderer.create(<Portal>Test Portal</Portal>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
