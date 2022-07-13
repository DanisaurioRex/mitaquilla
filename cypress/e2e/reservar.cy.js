describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.mitaquilla.com.co/verMas.php?idEvento=227')
    cy.get('#11185223').then(($btn) => {
      if ($btn.is(":disabled")) {
        return
      } else {
        cy.wrap($btn).click()
      }
    })
    cy.get('#11185224').then(($btn) => {
      if ($btn.is(":disabled")) {
        return
      } else {
        cy.wrap($btn).click()
      }
    })
    cy.get('#11185304').then(($btn) => {
      if ($btn.is(":disabled")) {
        return
      } else {
        cy.wrap($btn).click()
      }
    })
    cy.get('#11185305').then(($btn) => {
      if ($btn.is(":disabled")) {
        return
      } else {
        cy.wrap($btn).click()
      }
    })
  })  
})