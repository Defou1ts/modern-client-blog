import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Paragraph } from './index';

const textMock = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, natus!';

describe('P component', () => {
	it('renders a medium P', () => {
		render(<Paragraph type="medium">{textMock}</Paragraph>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a small P', () => {
		render(<Paragraph type="small">{textMock}</Paragraph>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a label P', () => {
		render(<Paragraph type="label">{textMock}</Paragraph>);
		const text = screen.getByText(textMock);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('P medium snapshot', () => {
		const component = renderer.create(<Paragraph type="medium">{textMock}</Paragraph>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('P small snapshot', () => {
		const component = renderer.create(<Paragraph type="small">{textMock}</Paragraph>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('P label snapshot', () => {
		const component = renderer.create(<Paragraph type="label">{textMock}</Paragraph>);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
