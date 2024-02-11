import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import '@testing-library/cypress/add-commands'

Then(
  'the user sees the different fields available on the user detail pannel',
  () => {
    cy.get('.customerdetails p').as('slot')
    cy.get('@slot').should('have.lengthOf', 9) //Assert the total number of fields displayed on the user detail pannel
  }
)
