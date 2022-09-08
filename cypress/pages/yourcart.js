import { FindElement } from "../support/commands";

const commonMethod = new FindElement();

export class Cart{

    checkout(){
        commonMethod.getElementByID('checkout').click();
    }
}