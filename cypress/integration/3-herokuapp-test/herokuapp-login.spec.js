/// <reference types="Cypress" />

describe("Login functionality Test",function(){

    it("should be able to login",function(){
      cy.visit("/login")
      cy.get('#username').type('Suyash Vikram Agrawal')  
      cy.get('#password').type('Suyash@1992')  
      cy.get('.fa').click().then(() => {console.log("Successfully logged")
      expect(true).to.equals(false)});      
    })


    // mixing of async and sync code
    // promises, callback function, async/await

    // dropdown, fileupload, jsonfile data read
    // use mocha library to assert - expect
}) 