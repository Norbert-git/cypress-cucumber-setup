Cucumber Setup


1,
npm install —save -dev cypress-cucumber-preprocessor


2,
cypress.json

     add in the same bracket as baseURL

    {
    "testFiles": "**/*.feature"
    }

3, 
 package.json

    after devDependencies add ,

    "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
    }

4,

    Cypress/plugins/index.js

    const cucumber = require('cypress-cucumber-preprocessor').default

    module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    }

5,
integration folder

    //create a new file  giveItProperName.feature

    // (feature snippet)

    Feature: giveItProperName          // name it something

    Feature This feature is …………..

    Scenario: Success……..
    Given ………….
    When …………..
    And ……………..
    And…………
    And ………….
    Then …………..

6,

    create a new folder integration /''Pizza''  and inside create a file, this case call it pizza.js

    import {Given, When, And, Then} from “cypress-cucumber-preprocessor/steps”

    Given(“  copy here the given from giveItProperName.feature ………….   “) => {
        cy.visit(‘/‘)
    }

    When( “ copy here the When from giveItProperName.feature…………. “ ) => {
        cy.get
    }

    And( “ copy here the And from giveItProperName.feature…………. “ ) => {
        cy.get
    }

    Then( “ copy here the Then from giveItProperName.feature…………. “ ) => {
        cy.get
    }
