const { expect } = require('@playwright/test');

class PIMPage {

    constructor(page) {
        this.page = page;

        // ---------- Add Employee ----------
        this.addEmployee = page.getByRole('link', { name: 'Add Employee' });

        this.firstName = page.locator('input[name="firstName"]');
        this.middleName = page.locator('input[name="middleName"]');
        this.lastName = page.locator('input[name="lastName"]');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.personalDetails = page.getByRole('heading', {
            name: 'Personal Details'
        });

        // ---------- Employee List ----------
        this.employeeList = page.getByRole('link', {
            name: 'Employee List'
        });

        this.employeeName = page.getByRole('textbox', {
            name: 'Type for hints...'
        }).first();

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.noRecordsFound = page.locator('span').filter({
            hasText: 'No Records Found'
        });

        // ---------- Edit Employee ----------
        this.editButton = page.getByRole('button').filter({
            hasText: /^$/
        }).nth(5);

        this.middleNameInput = page.getByRole('textbox', {
            name: 'Middle Name'
        });

        this.savePersonalDetails = page
            .locator('form')
            .filter({ hasText: 'Employee Full NameEmployee' })
            .getByRole('button', { name: 'Save' });

        this.successToast = page.getByText('Successfully Updated');
    }

    // ---------- Add Employee ----------

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

    // ---------- Employee List ----------

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

    // ---------- Edit Employee ----------

    async openEmployee() {
        await this.editButton.click();
    }

    async updateMiddleName(middleName) {
        await this.middleNameInput.fill(middleName);
    }

    async saveEmployee() {
        await this.savePersonalDetails.click();
    }

    async verifyEmployeeUpdated() {
        await expect(this.successToast).toBeVisible();
    }
}

module.exports = PIMPage;