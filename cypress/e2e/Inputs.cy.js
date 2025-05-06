describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('deve preencher o campo texto', () => {
        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('input[placeholder="John Doe"]')
            .type('Fernando Papito')

        cy.get('[name="email"]')
            .type('fernando@papito.dev')

            cy.get('[name="number"]')
            .type('2024')

        cy.get('[name="date"]')
            .type('2024-12-01')
    })

})