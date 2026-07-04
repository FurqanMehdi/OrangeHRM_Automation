const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const loginData = require('../../test-data/login.json');

test.describe('Login Module', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    // TC-001
    test('Valid Username & Valid Password', async () => {

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await loginPage.verifySuccessfulLogin();

    });

    // TC-002
    test('Valid Username & Invalid Password', async () => {

        await loginPage.login(
            loginData.invalidPassword.username,
            loginData.invalidPassword.password
        );

        await loginPage.verifyInvalidCredentials();

    });

    // TC-003
    test('Invalid Username & Valid Password', async () => {

        await loginPage.login(
            loginData.invalidUsername.username,
            loginData.invalidUsername.password
        );

        await loginPage.verifyInvalidCredentials();

    });

    // TC-004
    test('Invalid Username & Invalid Password', async () => {

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        await loginPage.verifyInvalidCredentials();

    });

    // TC-005
    test('Empty Username & Empty Password', async () => {

        await loginPage.clickLogin();

        await loginPage.verifyRequiredFields();

    });

    // TC-006
    test('Empty Username & Valid Password', async () => {

        await loginPage.login(
            loginData.emptyUsername.username,
            loginData.emptyUsername.password
        );

        await loginPage.verifyRequiredFields(1);

    });

    // TC-007
    test('Valid Username & Empty Password', async () => {

        await loginPage.login(
            loginData.emptyPassword.username,
            loginData.emptyPassword.password
        );

        await loginPage.verifyRequiredFields(1);

    });

    // TC-008
    test('Forgot Password Navigation', async () => {

        await loginPage.clickForgotPassword();

        await loginPage.verifyForgotPasswordPage();

    });

    // TC-009
    test('Login Using Enter Key', async () => {

        await loginPage.usernameInput.fill(loginData.validUser.username);
        await loginPage.passwordInput.fill(loginData.validUser.password);

        await loginPage.pressEnter();

        await loginPage.verifySuccessfulLogin();

    });

});