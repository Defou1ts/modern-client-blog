describe('Check app components', () => {
	before(() => {
		cy.viewport(1920, 1080);
	});

	it('Check', () => {
		cy.visit('/').get('div').should('exist');
	});
});
