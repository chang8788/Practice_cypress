describe('Exploring default command time out', () => {
  it('should be able to apply custom default timeout', {defaultCommandTimeout: 20000}, () => {
    cy.visit("/login")
    cy.get("#username").type("tomsmith")
    cy.get("#taolao").type("SuperSecretPassword!")
    
  })
})