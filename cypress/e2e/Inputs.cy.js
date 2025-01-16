describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('[data-cy="fullname"]')
            .type('Fernando Papito')

        cy.get('[name="email"]')
            .type('fernando@papito.dev')

        cy.get('[name="date"]')
            .type('2024-12-01')
    })

})

