import { CheckFooter, checkHeader } from '../support/support';

describe('Check layout', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('/');
	});

	checkHeader();
	CheckFooter();
});

