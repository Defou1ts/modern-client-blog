import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { SubscribeForm } from './index';

describe('SubscribeForm', () => {
	it('renders a  SubscribeForm', () => {
		render(<SubscribeForm />);
		const text = screen.getByText('subscribe.title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('SubscribeForm snapshot', () => {
		const component = renderer.create(<SubscribeForm />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
