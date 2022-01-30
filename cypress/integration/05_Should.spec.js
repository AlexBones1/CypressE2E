/// <reference types="Cypress" />


it('Проверка через expect то что поле содержит введенное значение', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
    cy.get('[data-qa-node="amount"]')
    .type(100)
    .should('have.value', 100)
    .and('be.visible')
})

it('Проверка через expect то что поле содержит введенное значение', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
    cy.get('[data-qa-node="amount"]')
    .type(100).then( input=> {
        expect(input).to.have.value(100)
    })  
})

it('Проверка того что по дефолту выбранна такая-то валюта', () => {
    cy.visit("https://next.privat24.ua/deposit/open?lang=en")
    cy.get('[data-qa-value="UAH"]')
    .should('be.checked') //проверка что выделлен, имеет в теге checked
})

it('Проверка по ховеру, что элемент отображается в выпадающем меню', () => {
    cy.visit("https://next.privat24.ua/deposit/open?lang=en")
    cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible') //проверка есть в выпадающем списке
})

it('Проверка того что есть аттрибут в теге, а так же он имеет значение button (REGEXP)', () => {
    cy.visit("https://next.privat24.ua?lang=en")
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
})

it.only('Проверка urlov (редиректы)', () => {
    cy.visit("https://next.privat24.ua?lang=en")
    cy.url()
        .should('eq', "https://next.privat24.ua/?lang=en")
})