class BasePage {
    //navigate to our url/path(automatically detects baseUrl in config file)
    async open(path = '') {
        await browser.url(path);
    }

    //clear our input value
    async clearInput(elem) {
    await elem.click();
    await browser.keys(['Control', 'a']);//ctrl+a selects all text in selected field
    await browser.keys('Backspace');//backspace deletes it
}

    //type text into field
    async type(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    //check if element is displayed
    async isDisplayed(element) {
        try {
            await element.waitForDisplayed({ timeout: 3000 });
            return true;
        } catch {
            return false;
        }
    }

    //wait for page title or other important element to be displayed
    async isPageDisplayed(pageIdentifierElement) {
        return this.isDisplayed(pageIdentifierElement);
    }

    //click wrapper to wait
    async click(element) {
        await element.waitForClickable();
        await element.click();
    }
}

module.exports = BasePage;
