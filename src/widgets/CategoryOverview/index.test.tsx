import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { CategoryOverview } from './index';

import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('CategoryOverview', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});
	it('renders a  CategoryOverview', () => {
		render(<CategoryOverview category={allPostCategories.business} />);
		const text = screen.getByText(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`);
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('CategoryOverview snapshot', () => {
		const component = renderer.create(<CategoryOverview category={allPostCategories.business} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
