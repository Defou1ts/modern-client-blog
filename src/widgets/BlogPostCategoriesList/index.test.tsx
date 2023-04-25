import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { BlogPostCategoriesList } from './index';

import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('BlogPostCategoriesList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  BlogPostCategoriesList', () => {
		render(<BlogPostCategoriesList categories={allPostCategories} />);
		const text = screen.getByText('blog.post-categories-title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('BlogPostCategoriesList snapshot', () => {
		const component = renderer.create(<BlogPostCategoriesList categories={allPostCategories} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
