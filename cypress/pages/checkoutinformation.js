import { FindElement } from '../support/commands';

const commonMethod = new FindElement();

export class CheckoutInformation{

    checkout(jsonData){
        this.fillCheckoutInformation(jsonData);
        this.clickOnContinue();
        this.clickOnFinish();
        cy.get('[data-test="back-to-products"]').click();        
    }

    fillCheckoutInformation(jsonData){
      commonMethod.getElementByID('first-name').type(jsonData.first_name)  // cy.get('#first-name').type(jsonData.first_name)
      commonMethod.getElementByID('last-name').type(jsonData.last_name)
      commonMethod.getElementByID('postal-code').type(jsonData.zipCode)
    }

    clickOnContinue(){
      commonMethod.getElementByID('continue').click();
    }

    clickOnFinish(){
      commonMethod.getElementByID('finish').click();
    }
}