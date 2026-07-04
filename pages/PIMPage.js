const { expect } = require('@playwright/test');

class PIMPage {

    constructor(page) {
        this.page = page;

        // Add Employee
        this.addEmployee = page.getByRole('link', { name: 'Add Employee' });

        this.firstName = page.locator('input[name="firstName"]');
        this.middleName = page.locator('input[name="middleName"]');
        this.lastName = page.locator('input[name="lastName"]');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.personalDetails = page.getByRole('heading', { name: 'Personal Details' });

        // Employee List (NEW)
        this.employeeList = page.getByRole('link', { name: 'Employee List' });

        this.employeeName = page.getByRole('textbox', {
            name: 'Type for hints...'
        }).first();

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

       this.noRecordsFound = page.locator('span').filter({
    hasText: 'No Records Found'
});
    }

    // ---------------- Add Employee ----------------

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

    // ---------------- Search Employee ----------------

    async openEmployeeList() {
        await this.employeeList.click();
    }

    async searchEmployee(employeeName) {
        await this.employeeName.fill(employeeName);
        await this.searchButton.click();
    }

    async verifyNoRecordsFound() {
        await expect(this.noRecordsFound).toBeVisible();
    }

}

module.exports = PIMPage;