'use strict'

describe('My first test with Cypress', () => {
    it('Open google', () => {
        cy.visit('https://www.google.com');
    })

    it('Search and open Youtube', () => {
        cy.get('.gLFyf').type('Youtube');
        cy.get('form').submit();
        cy.get('#search a').first().click();
    })

    it('Search QwertyPy in Youtube and open video', () => {
        cy.get('#search-input').type('QwertyPy{enter}');
        cy.get('#content ytd-video-renderer').first().click();
    })
})