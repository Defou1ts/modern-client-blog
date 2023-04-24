import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import { SocialLink } from './index';

describe('SocialLink component', () => {
	it('renders a Facebook SocialLink', () => {
		render(<SocialLink type="facebook" path="/" />);
		const text = screen.getByAltText('Facebook');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a Instagram SocialLink', () => {
		render(<SocialLink type="instagram" path="/" />);
		const text = screen.getByAltText('Instagram');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a Twitter SocialLink', () => {
		render(<SocialLink type="twitter" path="/" />);
		const text = screen.getByAltText('Twitter');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('renders a Linkedin SocialLink', () => {
		render(<SocialLink type="linkedin" path="/" />);
		const text = screen.getByAltText('Linkedin');
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	it('facebook SocialLink snapshot', () => {
		const component = renderer.create(<SocialLink type="facebook" path="/" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('instagram SocialLink snapshot', () => {
		const component = renderer.create(<SocialLink type="instagram" path="/" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('twitter SocialLink snapshot', () => {
		const component = renderer.create(<SocialLink type="twitter" path="/" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('linkedin SocialLink snapshot', () => {
		const component = renderer.create(<SocialLink type="linkedin" path="/" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
