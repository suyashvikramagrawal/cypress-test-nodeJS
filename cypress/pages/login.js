import { FindElement } from "../support/commands";

const commonMethod = new FindElement();

export class Login {

    navigate(){
        cy.visit("https://www.saucedemo.com/");
    }

    login(username, password){

        commonMethod.getElementByID('user-name').type(username);
        commonMethod.getElementByID('password').type(password);
        commonMethod.getElementByID('login-button').click().then(() => console.log("Successfully Logged")); 
    }

    verifyLoginIsSuccessful(){
        commonMethod.getElementByClassName('title').should('have.text','Products');
    }
}