import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Then('the GET request displays customerList', () => {
  cy.request({
    method: 'GET',
    url: 'http://localhost:3001/customerList',
    failOnStatusCode: false,
  }).as('details')
  //Validate status code
  cy.get('@details')
    .its('status')
    .should('eq', 200)
  cy.get('@details').then(response => {
    cy.get('@details').then(response => {
      cy.log(JSON.stringify(response.body))
    })
  })
})
