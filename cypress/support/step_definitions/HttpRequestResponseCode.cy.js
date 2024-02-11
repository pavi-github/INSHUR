import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Then('the GET request respone is successful', () => {
  cy.request({
    method: 'GET',
    url: 'http://localhost:3001/customers/1',
    failOnStatusCode: false,
  }).as('details')
  //Validate status code
  cy.get('@details')
    .its('status')
    .should('eq', 200)
  cy.get('@details').then(response => {
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  })
})
