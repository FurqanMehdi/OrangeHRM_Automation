const { expect } = require('@playwright/test');

class PIMPage {

    constructor(page) {
        this.page = page;

        this.addEmployee = page.getByRole('link', { name: 'Add Employee' });

        this.firstName = page.locator('input[name="firstName"]');
        this.middleName = page.locator('input[name="middleName"]');
        this.lastName = page.locator('input[name="lastName"]');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.personalDetails = page.getByRole('heading', { name: 'Personal Details' });
    }

    async openAddEmployee() {
        await this.addEmployee.click();
    }

    async addEmployeeData(employee) {

        await this.firstName.fill(employee.firstName);
        await this.middleName.fill(employee.middleName);
        await this.lastName.fill(employee.lastName);

        await this.saveButton.click();

    }

    async verifyEmployeeAdded() {
        await expect(this.personalDetails).toBeVisible();
    }

}

module.exports = PIMPage;