import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { H } from './index';

describe('H component', () => {
	it('renders a H display', () => {
		render(<H type="display">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H1', () => {
		render(<H type="h1">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H2', () => {
		render(<H type="h2">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H3', () => {
		render(<H type="h3">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H4', () => {
		render(<H type="h4">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H5', () => {
		render(<H type="h5">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a H6', () => {
		render(<H type="h6">Hello</H>);
		const text = screen.getByText('Hello');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('H Display snapshot', () => {
		const component = renderer.create(<H type="display">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H1 snapshot', () => {
		const component = renderer.create(<H type="h1">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H2 snapshot', () => {
		const component = renderer.create(<H type="h2">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('H3 snapshot', () => {
		const component = renderer.create(<H type="h3">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H4 snapshot', () => {
		const component = renderer.create(<H type="h4">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H5 snapshot', () => {
		const component = renderer.create(<H type="h5">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('H6 snapshot', () => {
		const component = renderer.create(<H type="h6">Hello</H>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
