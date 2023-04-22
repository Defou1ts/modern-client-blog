import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { Navbar } from './index';

import type { Route } from '@shared/interfaces/route';
import type { NextRouter } from 'next/router';

const mockRoutes: Route[] = [
	{
		translationPath: 'home',
		path: '/',
	},
	{
		translationPath: 'blog',
		path: '/blog',
	},
	{
		translationPath: 'about',
		path: '/contact',
	},
	{
		translationPath: 'contact',
		path: '/about',
	},
];

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Navbar', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a Navbar', () => {
		render(<Navbar routes={mockRoutes} />);

		const contactText = screen.getByText('header.contact');
		expect(contactText).toBeInTheDocument();
		expect(contactText).toBeVisible();
	});

	it('Navbar snapshot', () => {
		const component = renderer.create(<Navbar routes={mockRoutes} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
