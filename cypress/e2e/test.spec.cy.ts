describe('Visuals', () => {
  it('should compare screenshot of the entire page', () => {
    cy.visit('/')
    cy.get('div').should('have.class', 'square')
    cy.get('div').compareSnapshot('square', 0);
  })
})
