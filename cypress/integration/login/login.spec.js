// describe("Login", () => {
//   it("Sucsessful log in  ", () => {
//     const loginInfo = {
//       userName: "standard_user",
//       password: "secret_sauce",
//     }

//     cy.visit("/")
//     cy.get("#user-name").type(loginInfo.userName)
//     cy.get("#password").type(loginInfo.password)
//     cy.get("#login-button").click()
//     cy.url().should("contains", "/inventory.html")
//   })

//   it("Locked Out User ", () => {
//     const loginInfo = {
//       lockedOutUser: "locked_out_user",
//       password: "secret_sauce",
//     }

//     cy.visit("/")
//     cy.get("#user-name").type(loginInfo.lockedOutUser)
//     cy.get("#password").type(loginInfo.password)
//     cy.get("#login-button").click()
//     cy.get("h3").should(
//       "have.text",
//       "Epic sadface: Sorry, this user has been locked out."
//     )
//   })

//   it("Wrong Username ", () => {
//     const loginInfo = {
//       userName: "standard_userrrr",
//       password: "secret_sauce",
//     }

//     cy.visit("/")
//     cy.get("#user-name").type(loginInfo.userName)
//     cy.get("#password").type(loginInfo.password)
//     cy.get("#login-button").click()
//     cy.get("h3").should(
//       "have.text",
//       "Epic sadface: Username and password do not match any user in this service"
//     )
//   })

//   it("Wrong Password ", () => {
//     const loginInfo = {
//       userName: "standard_user",
//       password: "secret_sauceeeee",
//     }

//     cy.visit("/")
//     cy.get("#user-name").type(loginInfo.userName)
//     cy.get("#password").type(loginInfo.password)
//     cy.get("#login-button").click()
//     cy.get("h3").should(
//       "have.text",
//       "Epic sadface: Username and password do not match any user in this service"
//     )
//   })
// })
