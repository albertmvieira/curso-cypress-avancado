/// <reference types="Cypress" />

describe('Hacker Stories Loading', () => {

it('shows a "Loading ..." state before showing the results', () => {
    cy.intercept(
      'GET',
      '**/search**',
      {
        delay: 2000,
        fixture: 'stories'
      }
    ).as('getDelayedStories')
    
    cy.visit('/')
  
    cy.assertLoadingIsShownAndHidden()
    cy.wait('@getDelayedStories')
  
    cy.get('.item').should('have.length', 2)
  })

})