const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');

        this.dashboardTitle = page.locator('h6');
        this.invalidCredentials = page.locator('.oxd-alert-content-text');
        this.requiredMessage = page.locator('span.oxd-input-field-error-message');
        this.forgotPasswordLink = page.locator('.orangehrm-login-forgot');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async pressEnter() {
        await this.passwordInput.press('Enter');
    }

    async verifySuccessfulLogin() {
        await expect(this.dashboardTitle).toHaveText('Dashboard');
    }

    async verifyInvalidCredentials() {
        await expect(this.invalidCredentials).toHaveText('Invalid credentials');
    }

    async verifyRequiredFields(count = 2) {
        await expect(this.requiredMessage).toHaveCount(count);
    }

    async verifyForgotPasswordPage() {
        await expect(this.page).toHaveURL(/requestPasswordResetCode/);
    }

}

module.exports = LoginPage;