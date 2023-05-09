import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { Footer } from './index';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Footer', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
			pathname: '/',
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a Footer', () => {
		render(<Footer />);

		const titleText = screen.getByText('Modsen Client Blog');
		expect(titleText).toBeInTheDocument();
		expect(titleText).toBeVisible();
	});

	it('button header snapshot', () => {
		const component = renderer.create(<Footer />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
