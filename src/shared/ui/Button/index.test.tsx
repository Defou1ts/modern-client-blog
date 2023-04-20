import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Button } from './index';

describe('Button', () => {
	it('renders a primary button', () => {
		render(<Button type="primary">Hello</Button>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a secondary button', () => {
		render(<Button type="secondary">Hello</Button>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('button primary snapshot', () => {
		const component = renderer.create(<Button type="primary">Hello</Button>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('button secondary snapshot', () => {
		const component = renderer.create(<Button type="secondary">Hello</Button>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
