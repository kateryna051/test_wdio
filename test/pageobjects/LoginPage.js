const { $, browser } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

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

    //open main page
    async open(){
        await browser.url('https://www.saucedemo.com/');
    }
    async clearInput(elem) {
    await elem.click();
    await browser.keys(['Control', 'a']);
    await browser.keys('Backspace');
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
