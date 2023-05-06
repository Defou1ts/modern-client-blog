import { checkFooter, checkHeader, checkHomePageLayout } from '../support/support';

describe('Check layout', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	// checkHeader();
	// checkFooter();
});

describe('Check Home Page', () => {
	before(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});
	// checkHomePageLayout();
});
