import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { HomeOverviewPost } from './index';

import { useLocale } from '../../shared/lib/hooks/useLocale';

import { posts } from '@entities/Post/lib/mock/posts';
import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

jest.mock('../../shared/lib/hooks/useLocale', () => ({
	useLocale: jest.fn(),
}));

describe('HomeOverviewPost', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		const useLocaleMock = {
			locale: 'en',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
		(useLocale as jest.Mock).mockReturnValue(useLocaleMock);
	});
	it('renders a  HomeOverviewPost', () => {
		render(<HomeOverviewPost post={posts[0]} author={authors[0]} />);
		const text = screen.getByText('home.overview.posted-on');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('HomeOverviewPost snapshot', () => {
		const component = renderer.create(<HomeOverviewPost post={posts[0]} author={authors[0]} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
