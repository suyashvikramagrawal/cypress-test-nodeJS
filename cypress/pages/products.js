import { FindElement } from '../support/commands';

const commonMethod = new FindElement();

export class Products {

    addProductToCart(productID){
        commonMethod.getElementByID(productID).click().then(console.log("Product added successfully"));
    }

    addProductToCart(jsonData){
        for (let i = 0; i < (jsonData.items.length); i++) {
            commonMethod.getElementByID(jsonData.items[i].productID).click()
            .then(() => console.log(jsonData.items[i].item + " " + "added successfully"));
        }       
    }

    clickOnShoppingCartLink(){
        commonMethod.getElementByClassName('shopping_cart_link').click();
    }

    sortProductsInAscendingOrder(){
        cy.get('select').select('Price (low to high)').then(() => console.log("Price set from low to high"));
    }

    sortProductsInDescendingOrder(){
        cy.get('select').select('Name (A to Z)').then(() => console.log("Item set in ascending order of names"));
    }

}