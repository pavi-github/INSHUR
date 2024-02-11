/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import '@testing-library/cypress/add-commands'

let expectedName
let expectedEmail
let expectedPhone
let actualName
let actualEamil
let actualPhone

Given(
  'the user sees the email and phone on the left side of the pannel',
  () => {
    cy.get('div h3')
      .eq(0)
      .invoke('text')
      .as('name')
    cy.get('@name').then($value => {
      expectedName = $value // Storing the value of Name into the variable name - expectedName for one of the customer
      expectedName.trim()
    })
    cy.get('.col-md-3 p')
      .eq(0)
      .invoke('text')
      .as('email')
    cy.get('@email').then($value => {
      expectedEmail = $value //Storing the value of Email into the variable name - expectedEmail for one of the customer
      expectedEmail.trim()
      cy.log(expectedEmail)
    })
    cy.get('.col-md-3 p')
      .eq(1)
      .invoke('text')
      .as('phone')
    cy.get('@phone').then($value => {
      expectedPhone = $value //Storing the value of phone into the variable name - expectedPhone
      expectedPhone.trim()
      cy.log(expectedPhone)
    })
  }
)

When('the user clicks View Details Button', () => {
  cy.findAllByText('Click to View Details')
    .eq(0)
    .click({ force: true })
})

Then(
  'the user validates the customer details on the user detail pannel',
  () => {
    cy.get('.customerdetails p')
      .eq(0)
      .invoke('text')
      .as('slot')
    cy.get('@slot').then($value => {
      let actualName = $value.slice(7)
      actualName.trim()
      expect(expectedName).to.contain(actualName) //Assert the name displayed on both of the pannels are same.
    })
    cy.get('.customerdetails p')
      .eq(1)
      .invoke('text')
      .as('slot')
    cy.get('@slot').then($value => {
      actualEamil = $value.slice(8)
      actualEamil.trim()
      expect(expectedEmail).to.contain(actualEamil) //Assert the email displayed on both of the pannels are same.
    })

    cy.get('.customerdetails p')
      .eq(2)
      .invoke('text')
      .as('slot')
    cy.get('@slot').then($value => {
      actualPhone = $value.slice(9)
      actualPhone.trim()
      expect(expectedPhone).to.contain(actualPhone) ////Assert the phone displayed on both of the pannels are same.
    })
  }
)
