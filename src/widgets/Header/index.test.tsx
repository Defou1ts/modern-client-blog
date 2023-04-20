import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { Header } from './index';

describe('Button', () => {
	it('renders a primary button', () => {
		render(<Header />);

		const titleText = screen.getByText('Modsen Client Blog');
		expect(titleText).toBeInTheDocument();
		expect(titleText).toBeVisible();

		const navtext1 = screen.getByText('Home');
		expect(navtext1).toBeInTheDocument();
		expect(navtext1).toBeVisible();

		const navtext2 = screen.getByText('Blog');
		expect(navtext2).toBeInTheDocument();
		expect(navtext2).toBeVisible();

		const navtext3 = screen.getByText('About Us');
		expect(navtext3).toBeInTheDocument();
		expect(navtext3).toBeVisible();

		const navtext4 = screen.getByText('Contact Us');
		expect(navtext4).toBeInTheDocument();
		expect(navtext4).toBeVisible();

		const buttonText = screen.getByText('Video about us');
		expect(buttonText).toBeInTheDocument();
		expect(buttonText).toBeVisible();
	});

	it('button header snapshot', () => {
		const component = renderer.create(<Header />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
