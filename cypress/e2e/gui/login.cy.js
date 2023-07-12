describe('Login', () => {
  it('login successfully', () => {
    const user = `${Cypress.env('user_name')}`
    cy.session(user, () => {
      cy.login()
      cy.get('.qa-user-avatar').should('be.visible')
    })
  })
})