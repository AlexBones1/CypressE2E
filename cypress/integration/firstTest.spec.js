/// <reference types="Cypress" />


it('find by ID', () => {
    cy.visit("https://facebook.com/")
    cy.get("#email")
});

it.only('Using Get find and EQ', () => {
    cy.visit("https://next.privat24.ua/deposit")
    cy.get("tbody").find('td').find('button').eq(0)
});