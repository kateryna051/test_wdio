const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')
const DashboardPage = require('../pageobjects/DashboardPage')
const credentials = require('../data/credentials');


describe('www.saucedemo.com login tests', () => {
    //before each test, open page
    beforeEach( async() =>{
        //check if page is displayed
       await LoginPage.open();
    await expect(await LoginPage.isLoginPageDisplayed()).toBe(true);
    });

    //UC-1 Test Login form with empty credentials
    it('UC-1: Should display "Username is required", if both fields are empty', async()=>{
        await LoginPage.typeCredentials('username','123456');
        await LoginPage.clearFields();
        await LoginPage.clickLogin();

        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    //UC-2 Test Login form with credentials by passing Username
    it('UC-2: Should display "Password is required", if password field is empty', async () => {
        await LoginPage.typeCredentials('username','123456');
        await LoginPage.clearInput(LoginPage.password);
        await LoginPage.clickLogin(); 
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    //using forEach check if every username passes
    for (const username of credentials.valid_usernames) {
        it(`UC-3: Should successfully login with valid username: ${username}`, async () => {
            await LoginPage.login(username, credentials.password);

            expect(await DashboardPage.isDashboardDisplayed()).toBe(true);
            await expect(DashboardPage.title).toHaveText('Swag Labs');
        });
    }

    it('UC-3.2: Locked out user should not login', async () => {
        await LoginPage.login(credentials.locked_user, credentials.password);

        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });





});

