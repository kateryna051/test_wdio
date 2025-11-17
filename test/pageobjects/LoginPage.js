const { $, browser } = require('@wdio/globals')
const BasePage = require('./BasePage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage{

    //get username
    get username () {
        return $('#user-name');
    }

    //get password
    get password () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }
    //get an error message 
    get errorMessage (){
        return $('.error-message-container');
    }

    //open page
    async open() {
        await super.open('/');
    }
    //check if page is displayed
    async isLoginPageDisplayed() {
        return this.isPageDisplayed(this.loginButton);
    }

    async typeCredentials (username, password){
        await this.clearInput(this.username);
        await this.clearInput(this.password);

        await this.username.setValue(username);
        await this.password.setValue(password);
    }

    //clear both fields
    async clearFields () {
        await this.clearInput(this.username);
        await this.clearInput(this.password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    //login function
    async login (username, password) {
        await this.typeCredentials(username,password);
        await this.clickLogin();
    }

}

module.exports = new LoginPage();
