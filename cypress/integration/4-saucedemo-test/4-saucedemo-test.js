/// <reference types="Cypress" />
'use strict';

import { CheckoutInformation } from '../../pages/checkoutinformation.js';
import { Login } from '../../pages/login.js';
import { Products } from '../../pages/products.js';
import { Cart } from '../../pages/yourcart.js';

const login = new Login();
const products = new Products();
const cart = new Cart();
const checkoutinfo = new CheckoutInformation();

let jsonData = require('/Users/suyashvikramagrawal/Documents/NodeJS Lean/cypress-test-nodeJS/cypress/fixtures/input-data.json');

describe("Login functionality of Sauce Demo",function(){
    
    beforeEach(() => {
        login.navigate();
        login.login(jsonData.userID,jsonData.password);
        login.verifyLoginIsSuccessful(); 
    })

    it("must allow user to sort the items in ascending order of their prices ",function(){
        products.sortProductsInAscendingOrder();   
    })

    it("must allow user to sort the items in descending order of their names",function(){
        products.sortProductsInDescendingOrder();
    })

    it("must allow user to user to select multiple items from the available list",function(){
        products.addProductToCart(jsonData);
        products.clickOnShoppingCartLink();  
        cart.checkout();                     
        checkoutinfo.checkout(jsonData);     
    })
    
})


// Use app actions
// create different branches for page object and app actions

// instead of input-data.json use fixtures or cypress.json
// go to heroku app and automate checkbox, radiobox, fileupload....

// CICD - Continuous Intergration/Deployment
//
// Github actions
// Browserstack is like a provider 