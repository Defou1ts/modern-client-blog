import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { PostList } from './index';

import { posts } from '../../lib/mock/posts';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('PostList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  PostList', () => {
		render(<PostList posts={posts} maxPosts={5} />);
		const firstPostText = screen.getByText('Step-by-step guide to choosing great font pairs');
		expect(firstPostText).toBeInTheDocument();
		expect(firstPostText).toBeVisible();

		const secondPostText = screen.getByText('Design tips for designers that cover everything you need');
		expect(secondPostText).toBeInTheDocument();
		expect(secondPostText).toBeVisible();

		const lastPostText = screen.getByText('8 Figma design systems you can download for free today');
		expect(lastPostText).toBeInTheDocument();
		expect(lastPostText).toBeVisible();
	});

	it('PostList snapshot', () => {
		const component = renderer.create(<PostList posts={posts} maxPosts={5} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
