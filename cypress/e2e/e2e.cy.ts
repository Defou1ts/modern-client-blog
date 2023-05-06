import { checkContactForm, checkFooter, checkHeader, checkHomePageLayout, checkPageLayout } from '../support/support';

describe('Check layout', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	checkHeader();
	checkFooter();
});

describe('Check Home Page', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.window().scrollTo('bottom', { duration: 100 });
		cy.window().scrollTo('bottom', { duration: 100 });
		cy.window().scrollTo('bottom', { duration: 100 });
		cy.window().scrollTo('bottom', { duration: 100 });
	});
	checkPageLayout('Home');
});

describe('Check Home Page Infinity Scroll', () => {
	before(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});
	checkHomePageLayout();
});

describe('Check Blog Page', () => {
	beforeEach(() => {
		cy.visit('/blog');
	});
	checkPageLayout('Blog');
});

describe('Check About Page', () => {
	beforeEach(() => {
		cy.visit('/about');
	});
	checkPageLayout('About');
});

describe('Check Contact Page', () => {
	beforeEach(() => {
		cy.visit('/contact');
	});

	checkContactForm();
	checkPageLayout('Contact');
});

describe('Check Privacy Page', () => {
	beforeEach(() => {
		cy.visit('/privacy');
	});
	checkPageLayout('Privacy');
});

describe('Check Post Page', () => {
	beforeEach(() => {
		cy.visit('/posts/1');
	});
	checkPageLayout('Post');
});

describe('Check Category Page', () => {
	beforeEach(() => {
		cy.visit('/category/business');
	});
	checkPageLayout('Business');
});
