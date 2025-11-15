const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')
const DashboardPage = require('../pageobjects/DashboardPage')

describe('www.saucedemo.com login tests', () => {
    //before each test, open page
    beforeEach( async() =>{
       await LoginPage.open();
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

    //define all valid usernames
    const valid_usernames = [
        'standard_user',
        'problem_user',
        'performance_glitch_user',
        'error_user',
        'visual_user'
    ];

    //using forEach check if every username passes
    valid_usernames.forEach((username)=>{
        it(`UC-3: Should successfully login with valid username: ${username}`, async()=>{
            await LoginPage.login(username, 'secret_sauce');

            await expect(DashboardPage.title).toBeDisplayed();
            await expect(DashboardPage.title).toHaveText('Swag Labs');
        });
    });

    it('UC-3.2: Locked out user should not login', async () => {
    await LoginPage.login('locked_out_user', 'secret_sauce');

    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.'
    );
});





});

