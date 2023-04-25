import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { PostCategoryCard } from './index';

import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('PostCategoryCard', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  PostCategoryCard large', () => {
		render(<PostCategoryCard postCategory={allPostCategories[0]} type="large" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});
	it('renders a  PostCategoryCard medium', () => {
		render(<PostCategoryCard postCategory={allPostCategories[0]} type="medium" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('PostCategoryCard snapshot large', () => {
		const component = renderer.create(<PostCategoryCard postCategory={allPostCategories[0]} type="large" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('PostCategoryCard snapshot medium', () => {
		const component = renderer.create(<PostCategoryCard postCategory={allPostCategories[0]} type="medium" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
