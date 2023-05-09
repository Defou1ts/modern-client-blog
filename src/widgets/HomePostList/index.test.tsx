import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { HomePostList } from './index';

import { posts } from '@entities/Post/lib/mock/posts';
import { authors } from '@entities/Author/lib/mock/authors';

import type { NextRouter } from 'next/router';
import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('HomePostList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  HomePostList', () => {
		render(
			<HomePostList
				featuredPost={posts[0]}
				featuredPostAuthor={authors[0]}
				posts={posts.slice(0, 4) as [Post, Post, Post, Post]}
				postsAuthors={
					authors.slice(0, 4) as [AuthorWithLocales, AuthorWithLocales, AuthorWithLocales, AuthorWithLocales]
				}
			/>
		);
		const text = screen.getByText('home.postlist.featured-post-title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('HomePostList snapshot', () => {
		const component = renderer.create(
			<HomePostList
				featuredPost={posts[0]}
				featuredPostAuthor={authors[0]}
				posts={posts.slice(0, 4) as [Post, Post, Post, Post]}
				postsAuthors={
					authors.slice(0, 4) as [AuthorWithLocales, AuthorWithLocales, AuthorWithLocales, AuthorWithLocales]
				}
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
