const { $ } = require('@wdio/globals')
const BasePage = require('./BasePage')

class DashboardPage extends BasePage {

    //get title at first
    get title() {
        return $('.app_logo');
    }

    //then get text from title
    async getTitleText() {
        return this.title.getText();
    }

    // check if page isDisplayed
    async isDashboardDisplayed() {
        return this.isPageDisplayed(this.title);
    }
}

module.exports = new DashboardPage();
