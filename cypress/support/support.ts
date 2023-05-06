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
			.click({ force: true })
			.get('[data-test-id=header-button]')
			.click({ force: true })
			.get('[data-test-id=modal]')
			.should('exist')
			.get('[data-test-id=video]')
			.should('exist')
			.get('[data-test-id=modal]')
			.click('topRight')
			.get('[data-test-id=modal]')
			.should('not.exist');
	});
};

export const checkFooter = () => {
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
			.should('exist');
	});
};

export const checkHomePageLayout = () => {
	it('Check Home Page Layout', () => {
		cy.get('[data-test-id=home-overview-post]')
			.should('exist')
			.get('[data-test-id=home-post-list]')
			.should('not.exist')
			.window()
			.scrollTo('bottom', { duration: 1000 })
			.get('[data-test-id=home-post-list]')
			.should('be.visible')
			.get('[data-test-id=home-about-us]')
			.should('be.visible')
			.get('[data-test-id=home-categories-list]')
			.window()
			.scrollTo('bottom', { duration: 1000 })
			.get('[data-test-id=wy-we-started]')
			.should('be.visible')
			.get('[data-test-id=author-list]')
			.should('be.visible')
			.window()
			.scrollTo('bottom', { duration: 1000 })
			.get('[data-test-id=logo-list]')
			.should('be.visible')
			.get('[data-test-id=testimonals-carousel]')
			.should('be.visible')
			.get('[data-test-id=join-our-team]')
			.should('be.visible')
			.window()
			.scrollTo('bottom', { duration: 1000 })
			.get('[data-test-id=home-overview-post-link]')
			.should('have.text', 'Read More >')
			.should('have.attr', 'href', '/posts/1')
			.get('[data-test-id=home-post-list-featured-link]')
			.should('have.text', 'Read More >')
			.should('have.attr', 'href', '/posts/2')
			.get('[data-test-id=home-postlist-post-link]')
			.first()
			.should('have.text', 'Step-by-step guide to choosing great font pairs')
			.should('have.attr', 'href', '/posts/1')
			.get('[data-test-id=home-about-us-link]')
			.should('have.text', 'Read More >')
			.should('have.attr', 'href', '/about')
			.get('[data-test-id=home-page-wrapper]');
	});
};

export const checkPageLayout = (pageName: string) => {
	it(`Check ${pageName} page Layout Desktop`, () => {
		cy.viewport(1920, 1080).document().screenshot(`${pageName} Desktop`, { overwrite: true });
	});

	it(`Check ${pageName} page Layout LX`, () => {
		cy.viewport(1100, 800).document().screenshot(`${pageName} LX`, { overwrite: true });
	});

	it(`Check ${pageName} page Layout LG`, () => {
		cy.viewport(868, 800).document().screenshot(`${pageName} LG`, { overwrite: true });
	});

	it(`Check ${pageName} page Layout MD`, () => {
		cy.viewport(600, 800).document().screenshot(`${pageName} MD`, { overwrite: true });
	});

	it(`Check ${pageName} page Layout SM`, () => {
		cy.viewport(400, 800).document().screenshot(`${pageName} SM`, { overwrite: true });
	});
};

export const checkContactForm = () => {
	it('Check Contact Form', () => {
		cy.intercept('https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true').as('getGoogleMap');
		cy.intercept('https://getform.io/f/a3bf6460-0a22-4829-8b6c-182ba714ef7d').as('sendForm');
		cy.wait('@getGoogleMap');
		cy.get('[data-test-id=contact-form-input-name]').type('Maxim');
		cy.get('[data-test-id=contact-form-input-name]').should('have.value', 'Maxim');
		cy.get('[data-test-id=contact-form-input-email]').type('example@gmail.com');
		cy.get('[data-test-id=contact-form-input-email]').should('have.value', 'example@gmail.com');
		cy.get('[data-test-id=contact-form-select]').select('Warsaw');
		cy.get('[data-test-id=contact-form-select]').should('have.value', 'Warsaw');
		cy.get('[data-test-id=contact-form-textarea]').type(
			'some text especially for text some text especially for text some text especially for text some text especially for text '
		);
		cy.get('[data-test-id=input-error]').should('not.exist');
		cy.get('[data-test-id=contact-form]').submit();
		cy.wait('@sendForm');
		cy.get('[data-test-id=contact-form-success]').should('be.visible');
		cy.get('[data-test-id=contact-form-error]').should('not.exist');
	});
};
