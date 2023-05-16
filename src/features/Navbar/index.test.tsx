import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { Navbar } from './index';

import { ROUTES } from '@shared/lib/constants/routes';

import type { Route } from '@shared/lib/interfaces/route';
import type { NextRouter } from 'next/router';

const mockRoutes: Route[] = [
	{
		translationPath: 'home',
		path: ROUTES.HOME,
	},
	{
		translationPath: 'blog',
		path: ROUTES.BLOG,
	},
	{
		translationPath: 'about',
		path: ROUTES.CONTACT,
	},
	{
		translationPath: 'contact',
		path: ROUTES.ABOUT,
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
