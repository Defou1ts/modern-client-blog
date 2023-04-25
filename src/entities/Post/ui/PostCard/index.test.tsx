import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { PostCard } from './index';

import { posts } from '../../lib/mock/posts';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('PostCard', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a  PostCard', () => {
		render(<PostCard post={posts[0]} />);
		const text = screen.getByText('Step-by-step guide to choosing great font pairs');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('PostCard snapshot', () => {
		const component = renderer.create(<PostCard post={posts[0]} />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
