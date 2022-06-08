import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("you are on the login page", () => {
  cy.visit("/")
})

When("you type in the username", () => {
  const loginInfo = {
    userName: "standard_user",
  }

  cy.get("#user-name").type(loginInfo.userName)
})

And("you type in the password", () => {
  const loginInfo = {
    password: "secret_sauce",
  }
  cy.get("#password").type(loginInfo.password)
})

And("you click on the login button", () => {
  cy.get("#login-button").click()
})

Then("you are logged in succesfully", () => {
  cy.url().should("contains", "/inventory.html")
})
