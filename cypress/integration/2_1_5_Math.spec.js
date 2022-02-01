/// <reference types="Cypress" />

it.only('', ()=> {
    cy.visit('http://suninjuly.github.io/math.html')

    let n = cy.get('#input_value')
        .its()
    
        const calc = (x) => String(Math.log(Math.abs(12 * Math.sin(Number(x)))))
   
    cy.get('#answer')
        .type(calc(n))
    
    cy.get('[for="robotCheckbox"]')
        .check()

    cy.get('[for="robotsRule"]')
        .check()

    cy.get('.btn').contains('Submit').click()
})