export const checkHeader = () => {
	it('Check header menu', () => {
		cy.get('[data-test-id=header]')
			.screenshot('desktop header', { overwrite: true })
			.should('be.visible')
			.get('[data-test-id=menu-wrapper]')
			.should('be.visible')
			.children()
			.should('have.length', 4)
			.get('[data-test-id=burger]')
			.should('not.be.visible')
			.get('[data-test-id=locales]')
			.children()
			.should('have.length', 2)
			.should('be.visible')
			.get('[data-test-id=header-button]')
			.should('have.text', 'Video about us')
			.get('[data-test-id=ru]')
			.click()
			.get('[data-test-id=header-button]')
			.should('have.text', 'Видео о нас')
			.get('[data-test-id=en]')
			.wait(150)
			.click({ force: true })
			.get('[data-test-id=header-button]')
			.should('have.text', 'Video about us')
			.viewport(390, 800)
			.get('[data-test-id=header]')
			.screenshot('mobile header', { overwrite: true })
			.get('[data-test-id=menu-wrapper]')
			.get('[data-test-id=burger]')
			.should('be.visible')
			.get('[data-test-id=burger]')
			.wait(150)
			.click({ force: true })
			.get('[data-test-id=menu-wrapper]')
			.screenshot('mobile menu', { overwrite: true })
			.should('have.css', 'top', '0px')
			.get('[data-test-id=menu-wrapper]')
			.should('be.visible');
	});

	it('Check video modal', () => {
		cy.get('[data-test-id=modal]')
			.should('not.exist')
			.get('[data-test-id=video]')
			.should('not.exist')
			.get('[data-test-id=header-button]')
			.click()
			.get('[data-test-id=modal]')
			.should('exist')
			.get('[data-test-id=video]')
			.should('exist')
			.get('[data-test-id=modal]')
			.click({ force: true })
			.get('[data-test-id=modal]')
			.should('not.exist');
	});
};

export const CheckFooter = () => {
	it('Check footer layout', () => {
		cy.get('[data-test-id=footer]')
			.should('be.visible')
			.screenshot('footer', { overwrite: true })
			.viewport(390, 800)
			.get('[data-test-id=footer]')
			.screenshot('footer mobile', { overwrite: true });
	});

	it('Check subscribe form', () => {
		cy.intercept('POST', 'https://getform.io/f/a3bf6460-0a22-4829-8b6c-182ba714ef7d').as('sendFormData');
		cy.get('[data-test-id=subsribe-form-input]')
			.type('example@gmail.com')
			.should('have.value', 'example@gmail.com')
			.get('[data-test-id=subsribe-form-success]')
			.should('not.exist')
			.get('[data-test-id=subsribe-form-error]')
			.should('not.exist')
			.get('[data-test-id=subcribe-form-submit]')
			.click({ force: true })
			.wait('@sendFormData')
			.get('[data-test-id=subsribe-form-success]')
			.should('exist')
			.wait(4000)
			.get('[data-test-id=subsribe-form-success]')
			.should('not.exist');
	});
};
