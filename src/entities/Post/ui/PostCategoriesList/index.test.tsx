import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { PostCategoriesList } from './index';

import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('PostCategoriesList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  PostCategoriesList horizontal large', () => {
		render(<PostCategoriesList categories={allPostCategories} type="horizontal" postCategoryCardType="large" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});
	it('renders a  PostCategoriesList vertical large', () => {
		render(<PostCategoriesList categories={allPostCategories} type="vertical" postCategoryCardType="large" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});
	it('renders a  PostCategoriesList horizontal medium', () => {
		render(<PostCategoriesList categories={allPostCategories} type="horizontal" postCategoryCardType="medium" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});
	it('renders a  PostCategoriesList vertical medium', () => {
		render(<PostCategoriesList categories={allPostCategories} type="vertical" postCategoryCardType="medium" />);
		const text = screen.getByText('Business');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('PostCategoriesList snapshot horizontal large', () => {
		const component = renderer.create(
			<PostCategoriesList categories={allPostCategories} type="horizontal" postCategoryCardType="large" />
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('PostCategoriesList snapshot vertical large', () => {
		const component = renderer.create(
			<PostCategoriesList categories={allPostCategories} type="vertical" postCategoryCardType="large" />
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('PostCategoriesList snapshot horizontal medium', () => {
		const component = renderer.create(
			<PostCategoriesList categories={allPostCategories} type="horizontal" postCategoryCardType="medium" />
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('PostCategoriesList snapshot vertical medium', () => {
		const component = renderer.create(
			<PostCategoriesList categories={allPostCategories} type="vertical" postCategoryCardType="medium" />
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
