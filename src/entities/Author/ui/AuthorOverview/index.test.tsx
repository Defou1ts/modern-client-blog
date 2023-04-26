import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { AuthorOverview } from './index';

import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';
jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('AuthorOverview', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  AuthorOverview', () => {
		render(<AuthorOverview author={authors[0]} />);
		const text = screen.getByText(
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.`
		);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('AuthorOverview snapshot', () => {
		const component = renderer.create(<AuthorOverview author={authors[0]} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
