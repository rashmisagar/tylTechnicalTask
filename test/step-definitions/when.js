const { When } = require('cucumber');
const productsPage = require('../page-objects/products.page');
const cartPage = require('../page-objects/cart.page');
const checkoutFirstPage = require('../page-objects/checkout-step-one.page');
const checkoutSecondPage = require('../page-objects/checkout-step-two.page');

const when = function () {

    When(/^I am on the Products Page with the title "([^"]*)"$/, function (arg1) {
        expect(productsPage.getTitle()).to.equal(arg1);
    });

    When(/^I sort the products by "([^"]*)" in the Products sort list$/, function (arg1) {
        productsPage.sortItemsByPriceDesc(arg1);
    });

    When(/^I click on Add to Cart button of the 2nd costliest item$/, function () {
        productsPage.clickAddToCartButtonSecondCostliest()
    });

    When(/^I click on Add to Cart button of the cheapest item$/, function () {
        productsPage.clickAddToCartButtonCheapest();
    });

    When(/^I click on the cart icon$/, function () {
        productsPage.clickCartIcon();
    });

    When(/^I click Checkout$/, function () {
        cartPage.clickCheckoutButton();
    });

    When(/^I enter details in the form:$/, function (data) {
        const [user] = data.hashes();
        checkoutFirstPage.inputDetails(user.firstName, user.lastName, user.postalCode);
    });

    When(/^I click Continue$/, function () {
        checkoutFirstPage.clickContinueButton();
    });

    When(/^I click Finish$/, function () {
        checkoutSecondPage.clickFinishButton();
    });
};

module.exports = when();
