const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutFirstPage extends Page {
    /**
     * define elements
     */

    get checkoutInfoLabel() { return $("div .subheader"); }
    get firstNameInput()   { return $('input[id="first-name"]'); }
    get secondNameInput()   { return $('input[id="last-name"]'); }
    get postalCodeInput()   { return $('input[id="postal-code"]'); }
    get continueButton()     { return $('input.btn_primary.cart_button'); }


    getTitle () {
        const checkoutInfoLabel = this.checkoutInfoLabel.getText();
        return checkoutInfoLabel;
    }

    inputDetails (firstName, lastName, postalCode) {
        this.firstNameInput.setValue(firstName);
        this.secondNameInput.setValue(lastName);
        this.postalCodeInput.setValue(postalCode);
    }

    clickContinueButton() {
        this.continueButton.click();
        //browser.pause(3000);
    }
}

module.exports = new CheckoutFirstPage();
