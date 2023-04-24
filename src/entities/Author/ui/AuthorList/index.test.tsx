import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { AuthorList } from './index';

import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('AuthorList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  AuthorList', () => {
		render(<AuthorList authors={authors} />);
		const authorText = screen.getByText('Floyd Miles');
		expect(authorText).toBeInTheDocument();
		expect(authorText).toBeVisible();

		const titleText = screen.getByText('author.list-title');
		expect(titleText).toBeInTheDocument();
		expect(titleText).toBeVisible();
	});

	it('AuthorList snapshot', () => {
		const component = renderer.create(<AuthorList authors={authors} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
