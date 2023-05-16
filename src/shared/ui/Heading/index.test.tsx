import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Heading } from './index';

describe('H component', () => {
	it('renders a H display', () => {
		render(<Heading type="display">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H1', () => {
		render(<Heading type="h1">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H2', () => {
		render(<Heading type="h2">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H3', () => {
		render(<Heading type="h3">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H4', () => {
		render(<Heading type="h4">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H5', () => {
		render(<Heading type="h5">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H6', () => {
		render(<Heading type="h6">Hello</Heading>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('H Display snapshot', () => {
		const component = renderer.create(<Heading type="display">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H1 snapshot', () => {
		const component = renderer.create(<Heading type="h1">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H2 snapshot', () => {
		const component = renderer.create(<Heading type="h2">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H3 snapshot', () => {
		const component = renderer.create(<Heading type="h3">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H4 snapshot', () => {
		const component = renderer.create(<Heading type="h4">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H5 snapshot', () => {
		const component = renderer.create(<Heading type="h5">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H6 snapshot', () => {
		const component = renderer.create(<Heading type="h6">Hello</Heading>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
