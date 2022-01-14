/// <reference types="cypress" />

describe('App', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('displays the pets up for adoption', () => {
        cy.findByText('Spot').should('exist');
        cy.findByText('Fluffy').should('exist');
    });
});
