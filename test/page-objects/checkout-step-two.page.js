const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutSecondPage extends Page {
    /**
     * define elements
     */

    get checkoutOverviewLabel() { return $("div .subheader"); }
    get summaryTotalLabel()   { return $(".summary_total_label"); }
    get finishButton()     { return $("a.btn_action.cart_button"); }

    getTitle () {
        const checkoutOverviewLabel = this.checkoutOverviewLabel.getText();
        return checkoutOverviewLabel;
    }

    isSummaryTotalDisplayed(){
        return this.summaryTotalLabel.isDisplayed();
    }

    getPriceTotalText () {
        const totalLabel = this.summaryTotalLabel.getText();
        return totalLabel;
    }

    clickFinishButton() {
        this.finishButton.isFocused();
        this.finishButton.click();
        //browser.pause(3000);
    }
}

module.exports = new CheckoutSecondPage();
