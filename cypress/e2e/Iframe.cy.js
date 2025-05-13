describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que tem Iframe', () => {

    // cy.get('[data-cy="iframe-inputs"]')
    //   .then(($iframe) => {
    //     const $body = $iframe.contents().find('body')

    //     cy.wrap($body)
    //       .find('#fullname')
    //       .type('Fernando Papito')

    cy.frameLoaded('[data-cy="iframe-inputs"]') // espera o iframe carregar

    cy.iframe('[data-cy="iframe-inputs"]') // entra no contexto do iframe
    .find('#fullname')
    .type('Fernando Papito')
  })
})

