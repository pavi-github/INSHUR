/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import '@testing-library/cypress/add-commands'

When('the user click the last user', function() {
  cy.get("[data-test='3']").click()
})

Then('assert', () => {
  cy.contains('Buys Lots of Products in general')
})
