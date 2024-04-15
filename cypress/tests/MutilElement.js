describe('Mutil Element mathching interaction', () => {
  it('should be able to interac with list of element', () => {
    cy.visit("/login")
    //Use eq
    // cy.get("input").eq(0).type("tomsmith")
    // cy.get("input").eq(1).type("SuperSecretPassword!")


    //Use clousure
    // cy.get("input").then(items => {
    //   cy.get(items[0]).clear()
    //   cy.get(items[0]).type("tomsmith")
    //   cy.get(items[1]).clear()
    //   cy.get(items[1]).type("SuperSecretPassword")

    // })

    //Use each
    cy.get("input").each((item, index) =>{
      cy.get(item).type("abc")
    })
    cy.get("[type='submit']").click()
    cy.wait(3000)
  })
})