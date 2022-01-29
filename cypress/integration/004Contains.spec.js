/// <reference types="Cypress" />
it('',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in');
})

it.only('',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Apple store');
})