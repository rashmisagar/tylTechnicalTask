const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FinishPage extends Page {
    /**
     * define elements
     */

    get checkoutOverviewLabel() { return $("div .subheader"); }
    get orderCompleteMessage()   { return $(".complete-header"); }
    get cartBadge() {return $(".shopping_cart_badge");}

    getTitle () {
        return this.checkoutOverviewLabel.getText();
    }

    getOrderCompleteMessage(){
        return this.orderCompleteMessage.getText();
    }

    isCartBadgeDisplayed(){
        return this.cartBadge.isDisplayed();
    }
}

module.exports = new FinishPage();
