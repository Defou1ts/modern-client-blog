import React from 'react';

import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { HomeCategoriesList } from './index';

import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('HomeCategoriesList', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('HomeCategoriesList snapshot', () => {
		const component = renderer.create(<HomeCategoriesList categories={Object.values(allPostCategories)} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
