describe('Date Picker', () => {

     beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Dezembro')

            cy.get('input[aria-label="Year"]')
            .type('1996')

            cy.get('span[aria-label="Dezembro 15, 1996"]')
            .click()

    })
})