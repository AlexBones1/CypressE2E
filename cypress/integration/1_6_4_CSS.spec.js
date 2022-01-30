/// <reference types="Cypress" />

it('', ()=> {
    cy.visit('http://suninjuly.github.io/simple_form_find_task.html')

    cy.get('[name="first_name"]')
        .type('Ivan')

    cy.get('[name="last_name"]')
        .type('Petrov')
    
    cy.get('.form-control.city')
        .type('Smolensk')

    cy.get('#country')
        .type('Russia')

    cy.get('button.btn')
        .click()
})

