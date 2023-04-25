import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { FeaturedPost } from './index';

import { posts } from '../../lib/mock/posts';

import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('FeaturedPost', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  FeaturedPost', () => {
		render(<FeaturedPost post={posts[0]} author={authors[0]} />);
		const text = screen.getByText('Step-by-step guide to choosing great font pairs');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('FeaturedPost snapshot', () => {
		const component = renderer.create(<FeaturedPost post={posts[0]} author={authors[0]} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
