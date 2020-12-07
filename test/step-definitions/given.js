const { Given } = require('cucumber');
const loginPage = require('../page-objects/login.page');

const given = function () {

    Given(/^I am on the saucedemo login page$/, function () {
        loginPage.open();
    });

    Given(/^I login with a standard user:$/, function (data) {
        const [user] = data.hashes();
        loginPage.login(user.username, user.password);
    });
};

module.exports = given();
