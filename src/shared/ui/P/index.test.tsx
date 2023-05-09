import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { P } from './index';

const textMock = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, natus!';

describe('P component', () => {
	it('renders a medium P', () => {
		render(<P type="medium">{textMock}</P>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a small P', () => {
		render(<P type="small">{textMock}</P>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a label P', () => {
		render(<P type="label">{textMock}</P>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('P medium snapshot', () => {
		const component = renderer.create(<P type="medium">{textMock}</P>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('P small snapshot', () => {
		const component = renderer.create(<P type="small">{textMock}</P>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('P label snapshot', () => {
		const component = renderer.create(<P type="label">{textMock}</P>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
