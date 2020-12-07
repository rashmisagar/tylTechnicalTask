const { Then } = require('cucumber');
const productsPage = require('../page-objects/products.page');
const cartPage = require('../page-objects/cart.page');
const checkoutFirstPage = require('../page-objects/checkout-step-one.page');
const checkoutSecondPage = require('../page-objects/checkout-step-two.page');
const finishPage = require('../page-objects/checkout-complete.page');

const then = function () {

    Then(/^I should see the Price \(high to low\) option selected in the sort list$/, function () {
        expect(productsPage.getTextSelectedSortOption()).to.equal(true);
    });

    Then(/^I see the sorted inventory list$/, function () {
        expect(productsPage.isInventoryListDisplayed()).to.equal(true);
    });

    Then(/^I should see one item added on the cart icon$/, function () {
        expect(productsPage.getTextCartBadge()).to.equal('1');
    });

    Then(/^I should see two items added on the cart icon$/, function () {
        expect(productsPage.getTextCartBadge()).to.equal('2');
    });

    Then(/^I should be on the Your Cart page with the title "([^"]*)"$/, function (arg1) {
        expect(cartPage.getTitle()).to.equal(arg1);
    });

    Then(/^I should see the two items in the cart list$/, function () {
        expect(cartPage.isCartListDisplayed()).to.equal(true);
    });

    Then(/^I should see Checkout: Your Information page with the title "([^"]*)"$/, function (arg1) {
        expect(checkoutFirstPage.getTitle()).to.equal(arg1);

    });

    Then(/^I should see Checkout: Overview page with the title "([^"]*)"$/, function (arg1) {
        expect(checkoutSecondPage.getTitle()).to.equal(arg1);
    });

    Then(/^I see the price total in the page$/, function () {
        expect(checkoutSecondPage.isSummaryTotalDisplayed()).to.equal(true);
        expect(checkoutSecondPage.getPriceTotalText()).to.contains("Total:");
    });

    Then(/^I should be on the Finish Page with the message title \- "([^"]*)"$/, function (arg1) {
        expect(finishPage.getTitle()).to.equal('Finish');
        expect(finishPage.getOrderCompleteMessage()).to.equal(arg1);
    });

    Then(/^I should see no items on the cart icon badge$/, function () {
        expect(finishPage.isCartBadgeDisplayed()).to.equal(false);
    });
};

module.exports = then();
