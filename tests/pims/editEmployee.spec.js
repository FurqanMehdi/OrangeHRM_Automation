const { test } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const Sidebar = require('../../components/Sidebar');
const PIMPage = require('../../pages/PIMPage');

const loginData = require('../../test-data/login.json');
const employeeData = require('../../test-data/employee.json');

test.describe('PIM - Edit Employee', () => {

    let loginPage;
    let sidebar;
    let pimPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        sidebar = new Sidebar(page);
        pimPage = new PIMPage(page);

        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await sidebar.openPIM();

        await pimPage.openEmployeeList();

    });

    test('Edit Employee Middle Name', async () => {

        await pimPage.searchEmployee(
            employeeData.editEmployee.searchName
        );

        await pimPage.openEmployee();

        await pimPage.updateMiddleName(
            employeeData.editEmployee.newLastName
        );

        await pimPage.saveEmployee();

        await pimPage.verifyEmployeeUpdated();

    });

});