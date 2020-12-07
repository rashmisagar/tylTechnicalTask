const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define elements
     */

    get usernameInput()   { return $('input[id="user-name"]'); }
    get passwordInput()   { return $('input[id="password"]'); }
    get loginButton()     { return $('input[id="login-button"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/');       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }

    login (username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }
}

module.exports = new LoginPage();
