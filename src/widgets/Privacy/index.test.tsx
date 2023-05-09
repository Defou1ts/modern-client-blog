import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { Privacy } from './index';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Privacy', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});
	it('renders a  Privacy', () => {
		render(<Privacy />);
		const text = screen.getByText('privacy.title');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('Privacy snapshot', () => {
		const component = renderer.create(<Privacy />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
