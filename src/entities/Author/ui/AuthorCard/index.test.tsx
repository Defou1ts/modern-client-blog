import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { AuthorCard } from './index';

import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('AuthorCard', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  AuthorCard', () => {
		render(<AuthorCard author={authors[0]} />);
		const text = screen.getByText('Floyd Miles');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('AuthorCard snapshot', () => {
		const component = renderer.create(<AuthorCard author={authors[0]} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
