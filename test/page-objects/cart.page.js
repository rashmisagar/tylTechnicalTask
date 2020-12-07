const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define elements
     */

    get cartLabel() { return $("div .subheader"); }
    get cartList() { return $(".cart_list");}
    get checkoutButton() {return $(".btn_action.checkout_button");}

    getTitle () {
        const cartLabel = this.cartLabel.getText();
        return cartLabel;
    }

    isCartListDisplayed(){
        return this.cartList.isDisplayed();
    }

    clickCheckoutButton() {
        this.checkoutButton.click();
        //browser.pause(3000);
    }
}

module.exports = new CartPage();
