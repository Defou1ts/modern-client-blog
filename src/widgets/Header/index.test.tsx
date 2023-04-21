import React from 'react';

import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderer from 'react-test-renderer';

import { Header } from './index';

import type { NextRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Header', () => {
	beforeAll(() => {
		const useRouterMock = {
			locale: 'en',
			locales: ['en', 'ru'],
		};
		(useRouter as jest.Mock<NextRouter>).mockReturnValue(useRouterMock as NextRouter);
	});

	it('renders a Header', () => {
		render(<Header />);

		const titleText = screen.getByText('Modsen Client Blog');
		expect(titleText).toBeInTheDocument();
		expect(titleText).toBeVisible();
	});

	it('button header snapshot', () => {
		const component = renderer.create(<Header />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
